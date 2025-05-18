import trimesh
from trimesh.creation import cylinder, cone, box
import numpy as np

# Parâmetros gerais
outer_diameter = 30.0  # mm
wall_thickness = 3.0  # mm
radius_outer = outer_diameter / 2
connector_radius = radius_outer - wall_thickness - 0.15
fit_length = 10.0

# Alturas
base_length = 190.0
middle_length = 190.0
nose_length = 100.0

# Haletas
fin_height = 40.0
fin_top = 40.0
fin_base = 30.0
fin_thickness = wall_thickness

# ===== Parte Inferior =====
base = cylinder(radius=radius_outer, height=base_length)
base_connector = cylinder(radius=connector_radius, height=fit_length)
base_connector.apply_translation([0, 0, base_length - fit_length])

def create_fin():
    width = (fin_top + fin_base) / 2
    fin = box(extents=[fin_thickness, width, fin_height])
    fin.apply_translation([radius_outer, 0, fin_height / 2])
    return fin

fins = []
for i in range(3):
    angle = i * 2 * np.pi / 3
    fin = create_fin()
    fin.apply_transform(trimesh.transformations.rotation_matrix(angle, [0, 0, 1]))
    fins.append(fin)

base_final = trimesh.util.concatenate([base, base_connector] + fins)
base_final.export("foguete_parte_inferior.obj")

# ===== Parte do Meio =====
middle = cylinder(radius=radius_outer, height=middle_length)
middle_connector = cylinder(radius=connector_radius, height=fit_length)
middle_connector.apply_translation([0, 0, middle_length - fit_length])
middle_final = trimesh.util.concatenate([middle, middle_connector])
middle_final.export("foguete_parte_meio.obj")

# ===== Ogiva =====
ogive = cone(radius=radius_outer, height=nose_length)
ogive.export("foguete_parte_superior.obj")

print("Arquivos .obj exportados com sucesso!")

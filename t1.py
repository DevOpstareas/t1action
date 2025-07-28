import  argparse

parser = argparse.ArgumentParser()

parser.add_argument('nombre')
parser.add_argument('apellido')
parser.add_argument('edad', type=int)

args = parser.parse_args()

tiempo = 100 - args.edad

print(f"{args.nombre} {args.apellido} cumplio la mayoria de edad hace {args.edad} años y le faltan {tiempo} años para cumplir 100 años")

from sympy import Poly, resultant, Symbol, sympify, expand, solve
from sympy import Matrix, det, binomial


def run():
    a,b,c,d,E = map(Symbol, ['a','b','c','d','E'])

    P = a*b

    P = P.subs(a,a+E).subs(b,b+E).subs(c,c+E).subs(d,d+E)

    P = expand(P)

    print(P)

run()

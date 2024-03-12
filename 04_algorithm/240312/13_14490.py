import sys

def back_dae_yeol(n, m):
    # 최대공약수(greatest_common_divisor)
    def gcd(a, b):
        # 작은 수를 뒤로 빼준다. 즉. b가 작은 수
        if a < b:
            a, b = b, a
        while a % b != 0:
            a, b = b, a % b
        return b
    n_m_gcd = gcd(n, m)
    print(f"{N//n_m_gcd}:{M//n_m_gcd}")

N, M = [int(i) for i in sys.stdin.readline().split(":")]
back_dae_yeol(N,  M)



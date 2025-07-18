# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [[7,4,1],[8,5,2],[9,6,3]]
n=len(matrix)
m=len(matrix[0])
for i in range(n):
    for j in range(i+1,m):
        matrix[i][j],matrix[j][i]=matrix[j][i],matrix[i][j]
for i in range(n):
    matrix[i].reverse()
print(matrix)
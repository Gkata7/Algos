function rotateImage(matrix) {
    var a = matrix.length;
    for(var i = 0; i < a / 2; i++){
        for(var j = 0; i < Math.ceil(a/2); j++){
            var temp = matrix[i][j];                  //set temp as the top
            matrix[i][j] = matrix[a-1-j][i];          //top to left
            matrix[a-1-j][i] = matrix[a-1-i][a-1-j];  //bottom to left
            matrix[a-1-i][a-1-j] = matrix[j][a-1-i]   //right to bottom
            matrix[j][a-1-i] = temp;                  ///top to right
        }
    }
    return matrix;
}

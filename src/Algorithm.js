// http://nguyenvanquan7826.wordpress.com/2014/03/25/thuat-toan-game-pokemon-pikachu/
package nguyenvanquan7826;

import java.awt.Point;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Algorithm {
    private int size = 5;
    private int barrier = 2;
    private int[][] matrix;

    public Algorithm() {
        readFile();
        showMatrix();
        System.out.println(checkTwoPoint(new Point(2, 2), new Point(4, 4))
            .toString());
    }

    // read matrix from file input
    private void readFile() {
        File fileInput = new File(getClass().getResource(
            "/nguyenvanquan7826/input").getFile());
        try {
            Scanner scan = new Scanner(fileInput);
            size = scan.nextInt();
            size += 2;
            matrix = new int[size][size];
            for (int i = 0; i < size; i++) {
                for (int j = 0; j < size; j++) {
                    matrix[i][j] = scan.nextInt();
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

    // show matrix
    private void showMatrix() {
        for (int i = 1; i < size - 1; i++) {
            for (int j = 1; j < size - 1; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    // check with line x, from column y1 to y2
    private boolean checkLineX(int y1, int y2, int x) {
    // find point have column max and min
    int min = Math.min(y1, y2);
    int max = Math.max(y1, y2);
    // run column
    for (int y = min; y <= max; y++) {
    if (matrix[x][y] == barrier) { // if see barrier then die
    System.out.println("die: " + x + "" + y);
    return false;
}
System.out.println("ok: " + x + "" + y);
}
// not die -> success
return true;
}

private boolean checkLineY(int x1, int x2, int y) {
    int min = Math.min(x1, x2);
    int max = Math.max(x1, x2);
    for (int x = min; x <= max; x++) {
        if (matrix[x][y] == barrier) {
            System.out.println("die: " + x + "" + y);
            return false;
        }
        System.out.println("ok: " + x + "" + y);
    }
    return true;
}

// check in rectangle
private int checkRectX(Point p1, Point p2) {
    // find point have y min and max
    Point pMinY = p1, pMaxY = p2;
    if (p1.y > p2.y) {
        pMinY = p2;
        pMaxY = p1;
    }
    for (int y = pMinY.y + 1; y < pMaxY.y; y++) {
        // check three line
        if (checkLineX(pMinY.y, y, pMinY.x)
            && checkLineY(pMinY.x, pMaxY.x, y)
            && checkLineX(y, pMaxY.y, pMaxY.x)) {

            System.out.println("Rect x");
            System.out.println("(" + pMinY.x + "," + pMinY.y + ") -> ("
                + pMinY.x + "," + y + ") -> (" + pMaxY.x + "," + y
                + ") -> (" + pMaxY.x + "," + pMaxY.y + ")");
            // if three line is true return column y
            return y;
        }
    }
    // have a line in three line not true then return -1
    return -1;
}

private int checkRectY(Point p1, Point p2) {
    // find point have y min
    Point pMinX = p1, pMaxX = p2;
    if (p1.x > p2.x) {
        pMinX = p2;
        pMaxX = p1;
    }
    // find line and y begin
    for (int x = pMinX.x + 1; x < pMaxX.x; x++) {
        if (checkLineY(pMinX.x, x, pMinX.y)
            && checkLineX(pMinX.y, pMaxX.y, x)
            && checkLineY(x, pMaxX.x, pMaxX.y)) {

            System.out.println("Rect y");
            System.out.println("(" + pMinX.x + "," + pMinX.y + ") -> (" + x
                + "," + pMinX.y + ") -> (" + x + "," + pMaxX.y
                + ") -> (" + pMaxX.x + "," + pMaxX.y + ")");
            return x;
        }
    }
    return -1;
}

/**
 * p1 and p2 are Points want check
 *
 * @param type
 *            : true is check with increase, false is decrease return column
 *            can connect p1 and p2
 */
private int checkMoreLineX(Point p1, Point p2, int type) {
    // find point have y min
    Point pMinY = p1, pMaxY = p2;
    if (p1.y > p2.y) {
        pMinY = p2;
        pMaxY = p1;
    }
    // find line and y begin
    int y = pMaxY.y;
    int row = pMinY.x;
    if (type == -1) {
        y = pMinY.y;
        row = pMaxY.x;
    }
    // check more
    if (checkLineX(pMinY.y, pMaxY.y, row)) {
        while (matrix[pMinY.x][y] != barrier
        && matrix[pMaxY.x][y] != barrier) {
            if (checkLineY(pMinY.x, pMaxY.x, y)) {

                System.out.println("TH X " + type);
                System.out.println("(" + pMinY.x + "," + pMinY.y + ") -> ("
                    + pMinY.x + "," + y + ") -> (" + pMaxY.x + "," + y
                    + ") -> (" + pMaxY.x + "," + pMaxY.y + ")");
                return y;
            }
            y += type;
        }
    }
    return -1;
}

private int checkMoreLineY(Point p1, Point p2, int type) {
    Point pMinX = p1, pMaxX = p2;
    if (p1.x > p2.x) {
        pMinX = p2;
        pMaxX = p1;
    }
    int x = pMaxX.x;
    int col = pMinX.y;
    if (type == -1) {
        x = pMinX.x;
        col = pMaxX.y;
    }
    if (checkLineY(pMinX.x, pMaxX.x, col)) {
        while (matrix[x][pMinX.y] != barrier
        && matrix[x][pMaxX.x] != barrier) {
            if (checkLineX(pMinX.y, pMaxX.y, x)) {
                System.out.println("TH Y " + type);
                System.out.println("(" + pMinX.x + "," + pMinX.y + ") -> ("
                    + x + "," + pMinX.y + ") -> (" + x + "," + pMaxX.y
                    + ") -> (" + pMaxX.x + "," + pMaxX.y + ")");
                return x;
            }
            x += type;
        }
    }
    return -1;
}

private MyLine checkTwoPoint(Point p1, Point p2) {
    // check line with x
    if (p1.x == p2.x) {
        if (checkLineX(p1.y, p2.y, p1.x)) {
            return new MyLine(p1, p2);
        }
    }
    // check line with y
    if (p1.y == p2.y) {
        if (checkLineY(p1.x, p2.x, p1.y)) {
            return new MyLine(p1, p2);
        }
    }

    int t = -1; // t is column find

    // check in rectangle with x
    if ((t = checkRectX(p1, p2)) != -1) {
        return new MyLine(new Point(p1.x, t), new Point(p2.x, t));
    }

    // check in rectangle with y
    if ((t = checkRectY(p1, p2)) != -1) {
        return new MyLine(new Point(t, p1.y), new Point(t, p2.y));
    }
    // check more right
    if ((t = checkMoreLineX(p1, p2, 1)) != -1) {
        return new MyLine(new Point(p1.x, t), new Point(p2.x, t));
    }
    // check more left
    if ((t = checkMoreLineX(p1, p2, -1)) != -1) {
        return new MyLine(new Point(p1.x, t), new Point(p2.x, t));
    }
    // check more down
    if ((t = checkMoreLineY(p1, p2, 1)) != -1) {
        return new MyLine(new Point(t, p1.y), new Point(t, p2.y));
    }
    // check more up
    if ((t = checkMoreLineY(p1, p2, -1)) != -1) {
        return new MyLine(new Point(t, p1.y), new Point(t, p2.y));
    }
    return null;
}
}
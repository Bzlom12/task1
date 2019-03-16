function getDate(h, m, s, d, mon) {
    if (h < 10) {
        h = "0" + h;
        return h;
    }
    if (m < 10 ) {
        m = "0" + m;
        return m;
    }
    if (s < 10 ) {
        s = "0" + s;
        return s;
    }
    if (d < 10 ) {
        d = "0" + d;
        return d;
    }
    if (mon < 10 ) {
        mon = "0" + mon;
        return mon;
    }
}
getDate(4, 21, 1 , 1, 12);
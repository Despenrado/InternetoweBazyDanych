module.exports = {
    registerUserQuery: 'INSERT INTO uzytkownik (LOGIN_UZYTKOWNIK, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK,' +
        'DATA_URODZENIA_UZYTKOWNIK, HASHED_PASS_UZYTKOWNIK, TYP_UZYTKOWNIK)' +
        'VALUES (?, ?, ?, ?, ?, ?)',

    editProfileQuery:'UPDATE uzytkownik SET IMIE_UZYTKOWNIK=?, NAZWISKO_UZYTKOWNIK = ?, DATA_URODZENIA_UZYTKOWNIK = ? WHERE LOGIN_UZYTKOWNIK = ?',

    showStatisticQuery: 'SELECT MIEJSCE as place, CZAS as time, NAZWA_BIEG as name FROM wyniki INNER JOIN bieg_zakonczony ON wyniki.ID_BIEG = bieg_zakonczony.ID_BIEG WHERE wyniki.LOGIN_UZYTKOWNIK = ?',

    doesUserExistQuery:'SELECT LOGIN_UZYTKOWNIK FROM uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    addRunQuery: 'INSERT INTO bieg (DATA_BIEG, ID_TRASA, LOGIN_UZYTKOWNIK, NAZWA_BIEG) VALUES (?, ?, ?, ?)',
    
    finishRun: 'INSERT INTO bieg_zakonczony (ID_BIEG, DATA_BIEG, ID_TRASA, LOGIN_UZYTKOWNIK, NAZWA_BIEG) VALUES (?, ?, ?, ?, ?)',
    
    editRunQuery: 'UPDATE bieg SET NAZWA_BIEG = ?, ID_TRASA = ?, DATA_BIEG = ? WHERE ID_BIEG = ?',

    loginUserQuery: 'SELECT TYP_UZYTKOWNIK AS type, HASHED_PASS_UZYTKOWNIK AS pass, LOGIN_UZYTKOWNIK AS login FROM uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    authUserQuery: 'SELECT TYP_UZYTKOWNIK AS type, LOGIN_UZYTKOWNIK AS login FROM uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    getRunsQuery: 'SELECT ID_BIEG, DATA_BIEG, NAZWA_BIEG, POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK ' +
        'FROM bieg INNER JOIN trasa ON trasa.ID_TRASA = bieg.ID_TRASA ' +
        'INNER JOIN uzytkownik ON uzytkownik.LOGIN_UZYTKOWNIK = bieg.LOGIN_UZYTKOWNIK WHERE BIEG_AKCEPTACJA = 1',
        
    isSignedQuery: 'SELECT COUNT(LOGIN_UZYTKOWNIK ) AS runner ' +
        'FROM uczestnicy_bieg WHERE ID_BIEG = ? AND LOGIN_UZYTKOWNIK = ?',

    signupRunnerQuery: 'INSERT INTO uczestnicy_bieg (ID_BIEG, LOGIN_UZYTKOWNIK, OBECNOSC_BIEGACZ) VALUES(?, ?, 1)',

    editRouteQuery: 'UPDATE trasa SET POCZATEK_TRASA = ?, KONIEC_TRASA = ?, MIASTO_TRASA = ?, DLUGOSC_TRASA = ? WHERE ID_TRASA = ?',

    addRouteQuery: 'INSERT INTO trasa (POCZATEK_TRASA, KONIEC_TRASA, MIASTO_TRASA, DLUGOSC_TRASA) VALUES(?, ?, ?, ?)',

    readRoutsQuery: 'SELECT * FROM trasa',

    addResultsQuery: 'INSERT INTO wyniki (LOGIN_UZYTKOWNIK, ID_BIEG, MIEJSCE, CZAS) VALUES(?,?,?,?)',

    confirmRun: 'UPDATE bieg SET BIEG_AKCEPTACJA = 1 WHERE ID_BIEG = ?',

    readRun: 'SELECT * FROM bieg WHERE ID_BIEG = ?',

    readMyRunsQuery: 'SELECT * FROM bieg WHERE LOGIN_UZYTKOWNIK = ?',

    deleteRun: 'DELETE FROM bieg WHERE ID_BIEG = ?',

    removeUser: 'DELETE FROM uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',

    findUserQuery: 'SELECT LOGIN_UZYTKOWNIK AS login FROM Uzytkownik WHERE LOGIN_UZYTKOWNIK = ?',
    
    selectUnacceptedRuns: 'SELECT * FROM bieg WHERE BIEG_AKCEPTACJA = 0',

    getAllUsers: 'SELECT LOGIN_UZYTKOWNIK, IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK FROM uzytkownik',
    
    showProfileQuery: 'SELECT LOGIN_UZYTKOWNIK AS login, IMIE_UZYTKOWNIK AS name, NAZWISKO_UZYTKOWNIK AS surname, DATA_URODZENIA_UZYTKOWNIK AS date, TYP_UZYTKOWNIK AS type FROM uzytkownik WHERE LOGIN_UZYTKOWNIK = ? ',

    showRunnersQuery: 'SELECT IMIE_UZYTKOWNIK, NAZWISKO_UZYTKOWNIK, uczestnicy_bieg.LOGIN_UZYTKOWNIK FROM uczestnicy_bieg INNER JOIN uzytkownik ON uczestnicy_bieg.LOGIN_UZYTKOWNIK = uzytkownik.LOGIN_UZYTKOWNIK WHERE ID_BIEG = ?',

    getRunOrganizer: 'SELECT LOGIN_UZYTKOWNIK FROM bieg WHERE ID_BIEG = ?',

};

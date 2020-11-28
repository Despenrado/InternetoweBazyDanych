import db from '../settings/db';
import {addRunQuery, editRunQuery, getRunOrganizer, showRunnersQuery,addRouteQuery,readRun,deleteRun,editRouteQuery,addResultsQuery,confirmRun, finishRun} from '../settings/queries';

export default {
    async addRun(req, res, next) {
        try {
            const {data_bieg, id_trasa, name} = req.body;
            const {login, type} = req.user;
            if (type === 'organizator') {
                await db.query(addRunQuery, [data_bieg, id_trasa, login, name]);
                res.send('Bieg został utworzony.');
            } else {
                res.send('Brak dostępu.');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Bieg nie został dodany.');
        }
    },

    async editRun(req, res, next) {
        try {
            const {name, route, date} = req.body;
            const {login, type} = req.user;
            if (type == 'organizator') {
                const organizer = await db.query(getRunOrganizer, [req.params.id]);
                if (organizer[0].LOGIN_UZYTKOWNIK == login) {
                    await db.query(editRunQuery, [name, route, date, req.params.id]);
                    res.send('Bieg został zedytowany');
                } else {
                    res.send('Brak dostępu..');
                }
            } else {
                res.send('Brak dostępu...');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się edytować biegu');
        }
    },

    async confirmRun(req, res, next){
        try{
            const {type} = req.user;
            if(type === 'organizator') {
                await db.query(confirmRun, [req.params.id]);
                res.send('Bieg został pomyślnie zatwierdzony');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się zatwierdzić biegu');
        }
    },

    async finishRun(req, res, next){
        try{
            const {login, type} = req.user;
            const {trasa_id, nazwa,data_bieg} = req.body;
            console.log(req.user)
            if(type === 'organizator') {
                await db.query(finishRun, [req.params.id, data_bieg,trasa_id,login, nazwa]);
                res.send('Bieg został pomyślnie zatwierdzony');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się zatwierdzić biegu');
        }
    },

    async editRoute(req, res, next) {
        try {
            const {start, end, city, length} = req.body;
            const {id} = req.params;
            const {type} = req.user;
            if(type === 'organizator') {
                await db.query(editRouteQuery, [start, end, city, length, id]);
                res.send('Trasa została zedytowana');
            }else{
                res.send('Brak dostępu.');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się edytować trasy');
        }
    },

    async addRoute(req, res, next) {
        try {
            const {start, end, city, length} = req.body;
            const {type} = req.user;
            if(type === 'organizator') {
                await db.query(addRouteQuery, [start, end, city, length]);
                res.send('Trasa została dodana');
            }else{
                res.send('Brak dostępu.');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się dodać trasy');
        }
    },

    async addResults(req, res, next){
        try{
            const {type} = req.user;
            if(type === 'organizator') {
                const {login, place, time} = req.body;
                await db.query(addResultsQuery, [login, req.params.id, place, time]);
                res.send('Wyniki zostały dodane');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało dodać wyników');
        }
    },

    async readRun(req, res, next){
        try{
            const {type} = req.user;
            if(type === 'organizator') {
                const run = await db.query(readRun, [req.params.id]);
                res.send(run);
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się odczytać biegu');
        }
    },

    async deleteRun(req, res, next){
        try{
            const {type} = req.user;
            if(type === 'organizator') {
                const run = await db.query(deleteRun, [req.params.id]);
                res.send('Bieg został usunięty');
            }else{
                res.send('Brak dostępu.');
            }
        }
        catch(err) {
            console.error(err);
            res.send('Błąd! Nie udało się usunięty biegu');
        }
    },

    async showRunners(req, res, next) {
        try {
            const {login, type} = req.user;

            if (type == 'organizator') {
                const organizer = await db.query(getRunOrganizer, [req.params.id]);
                if (organizer[0].LOGIN_UZYTKOWNIK == login) {
                    const runners = await db.query(showRunnersQuery, [req.params.id]);
                    res.send(runners);
                } else {
                    res.send('Błąd nie niejsteś organizatorem tego biegu');
                }
            }else{
                res.send('Błąd nie jesteś organizatorem');
            }
        } catch (err) {
            console.error(err);
            res.send('Błąd! Nie udało się wyświetlić biegaczy');
        }
    }
}

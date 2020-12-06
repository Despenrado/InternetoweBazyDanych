import db from '../settings/db';
import {getRunsQuery, isSignedQuery, signupRunnerQuery, signupVolunteryQuery} from '../settings/queries';

export default {
    async signupRun(req, res, next) {
        try {
            const {login, type} = req.user;
            if(type === 'biegacz' || type === 'organizator') {
                console.log(req.user)
                const isSigned = await db.query(isSignedQuery, [req.params.id, login]);
                console.log(isSigned[0].runner)
                if (isSigned[0].runner == 0) {
                    await db.query(signupRunnerQuery, [req.params.id, login]);
                    res.send('Zostałeś zapisany jako biegacz.');
                } else {
                    res.send('Jesteś już zapisany jako biegacz.')
                }
            }else{
                res.send('Brak dostępu..')
            }
        } catch (err) {
            console.error(err);
            res.send('Nie udało się zapisać jako biegacz.');
        }
    },

    async getRuns(req, res, next) {
        try {
            const runs = await db.query(getRunsQuery, [])
            res.send(runs)
        } catch(err){
            console.error(err);
            res.send('Nie udało się pobrać listy biegów.')
        }
        }
}
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(req.method);
            next();
        },(req, res, next) => {
            res.send('GET Request Works!')
        })

        .post((req,res) => {
            res.send('POST Request Works!')
        });
    
    app.route('/contact/:contactID')
    .put((req, res) => {
        res.send('PUT Request Works!')
    })

    .delete((req,res) => {
        res.send('DELETE Request Works!')
    }); 
   
}

export default routes;
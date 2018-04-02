# Houses Project

## Configurazione di base

La struttura del progetto si compone di due cartelle: ``server`` e ``client``.

- ``server`` è stata generata con il comando ``express server --hbs`` (utilizzando ``express-generator``);
- ``client`` è stata generata con il comando ``vue init webpack client`` (utilizzando la ``vue-cli``)

Altri pacchetti fondamentali utilizzati sono:

- **server**: 
    - ``cors``;
- **client**: 
    - ``axios`` (per gestire le richieste alle API);
    - ``bulma`` (come *framework* CSS);


## Esecuzione

### Modalità di sviluppo

- Per eseguire il **server** digitare in una finestra di terminale, dalla *root* del progetto, ``npm run server`` (le API saranno raggiungibili su ``http://localhost:8081``);
- Per eseguire il **client** digitare in una finestra di terminale, dalla *root* del progetto, ``npm run client`` (il Client sarà raggiungibile su ``http://localhost:8080``);
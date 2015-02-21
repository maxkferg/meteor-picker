# Picker

Integrating with cloud services such as Google Drive and Dropbox is always time consuming. Picker provides an easy way to integrate these services with Meteor, without requiring any expensive SAAS software. Authentication is handled by the core authentication packages (accounts-google ect) 

## Usage
Picker makes provides the `Picker` object available on the client and the server. This object can be used to lauch file pickers, or handle events.
```javascript
    // Launch a file picker for the service
    Picker.pickWithGoogle(callback)
    Picker.pickWithDropbox(callback)
    Picker.pickWithBox(callback)
    Picker.pickWithOnedrive(callback)
    
    // Callbacks are in the standard node form
    var callback = function(error,response){
        response.service; // 'google'
        response.accessToken; // 'SaSsdA9AG9sfu98wue23fs8s'
        response.fileId; // 'FILE-nssawqsan32poadjpa-msyt'
    }
    
    // Files can be downloaded on the server or client
    Picker.pickWithGoogle(function(error,file){
        if (error) throw error; 
        Picker.download(response,function(error,file){
            file.data; //!!!!!
        });
    });
    
    
```


## Installation

    meteor add maxkferg:converter

## License

MIT
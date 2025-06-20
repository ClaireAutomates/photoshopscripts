/**
* Original source: 
* https://community.adobe.com/t5/photoshop-ecosystem-discussions/create-one-color-jpgs-from-csv-file/m-p/12528537
*/

var tf = File.openDialog("Select a text file to read");
tf.open("r");
var txt = tf.read();
var hxList = txt.split("\n")

var f = Folder.selectDialog("Select a folder for the Saved JPEGs");
var so = new JPEGSaveOptions();

app.preferences.rulerUnits = Units.INCHES;

var w = 5;
var h = 7;
var r = 72;

var doc, cn, fc;


for (var i = 0; i < hxList.length; i++){
    cn = hxList[i]
    fc = makeRGB(hxList[i].toString());
    doc = app.documents.add(w, h, r, cn);
    doc.selection.fill(fc);
    doc.saveAs(new File(f + "/" + cn + ".jpg"), so);
    doc.close();
};   
 


/**
* Makes and returns an RGB color 
*  a HEX string
*  returns an RGBColor 
* 
*/	

function makeRGB(a){
    var colorobj = new RGBColor()
    colorobj.hexValue = a;
    return colorobj;
};

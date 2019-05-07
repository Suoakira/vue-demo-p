
var fs = require('fs-extra');
const panelName = "com.integnity.vuepanels";

// // const jsxbin = require( 'jsxbin' );
// fs.emptyDir(__dirname + '/../../build/' + panelName + '/')
// .then(() => {
// 	fs.emptyDir(__dirname + '/../../dev/' + panelName + '.dev/')
// })
// .then(() => {
// 	console.log('Prepared ../dev');
	
// })

// fs.copy(__dirname + '/../dist/', __dirname + '/../../build/' + panelName + '/')
// .then(() => {
// 	console.log('Copied: /dist to ../build');
// 	fs.copy(__dirname + '/../public/.debug', __dirname + '/../../build/' + panelName +'/.debug');
// })
// .then(() => {
// 	console.log('Copied: /.debug to ../build');
// 	fs.copy(__dirname + '/../../build/' + panelName + '/', __dirname + '/../../dev/' + panelName + '.dev/');
// })
// .then(() => {
// 	console.log('Copied: ../build to ../dev');
// 	fs.copy(__dirname + '/../dev-assets/', __dirname + '/../../dev/' + panelName + '.dev/');
// })
// .then(() => {
// 	console.log('Copied: /dev-assets to ../dev');
// 	return;
// })
// .catch(err => {
//   console.error(err)
// })

async function distributeFiles() {
  try {
    await fs.copySync(__dirname + '/../dist/', __dirname + '/../../build/' + panelName + '/')
	console.log('Copied: /dist to ../build');
	
	try {
		await fs.copy(__dirname + '/../public/.debug', __dirname + '/../../build/' + panelName +'/.debug');
		console.log('Copied: /.debug to ../build');

		try {
		await fs.copy(__dirname + '/../../build/' + panelName + '/', __dirname + '/../../dev/' + panelName + '.dev/');
		console.log('Copied: ../build to ../dev');
		
			try {
				await fs.copy(__dirname + '/../dev-assets/', __dirname + '/../../dev/' + panelName + '.dev/');
				console.log('Copied: /dev-assets to ../dev');

				// jsxbin( __dirname + '/../public/jsx/extendscript_2.jsx', __dirname + '/../../build/' + panelName + '/jsx/extendscript_2.jsxbin' )
				// .then( outputfiles => {
				// 	console.log( 'Finished!' )
				// })
				// .catch( err => {
				// 	console.error( err )
				// })

			} catch (err) {
				console.error(err)
			}		
		
		} catch (err) {
			console.error(err)
		}
    } catch (err) {
      console.error(err)
    }
  } catch (err) {
    console.error(err)
  }
}
distributeFiles();
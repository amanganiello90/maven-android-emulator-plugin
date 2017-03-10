var shell_exec = require('shell_exec').shell_exec;


//1 apk profile
var apkProfile = process.argv[2];

//2 apk version
var apkVersion = process.argv[3];

// 3 timeout (optional)
var globalTimeout = process.argv[4];

if(globalTimeout==null){
var globalTimeout=25;
}

var timeout= globalTimeout;

function installApk(timeout) {
    setTimeout(function () {
		waitEmulator(timeout);
		timeout= timeout -1;
        var result =shell_exec('adb install -r Name-'+ apkVersion +'-'+apkProfile +'.apk' );
		
		if(result.indexOf("Success")==-1 && timeout!=0){
        installApk(timeout);
		}
		else if(result.indexOf("Success")!=-1){
		console.log(result);
		console.log('APK INSTALLED!');
		}
		else{
		console.log(result);	
		console.error('APK INSTALL FAILURE!');
		}
    }, 1000);
}

function waitEmulator(timeout){
	
		timeout= timeout -1;
        var result =shell_exec('adb devices' );
		var split=result.split('List of devices');
		if(split[1].indexOf("device")==-1 && timeout!=0){
		
		// Sleep for 1 second
		sleep(1000);
		console.log('wait max another '+timeout + ' seconds');
        waitEmulator(timeout);
		}
		else if (split[1].indexOf("device")!=-1){
			// end wait
		}
		else if(timeout==0){
		console.error('TIMEOUT EXCEPTION: the device is not running!!');
		process.exit(1);
		}
		else{
			// nothing
		}
		
	
	
	
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



console.log('download apk...');


console.log(shell_exec('mvn dependency:get -DgroupId=yourGroup -DartifactId=Name -Dversion='+ apkVersion+ ' -Dpackaging=apk -Dclassifier='+apkProfile+' -Ddest=.'));



console.log('install apk...');

installApk(timeout);





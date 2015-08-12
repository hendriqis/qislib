	function cetaklabelMR() {
		var sNoMed = escape(document.getElementById('txtNomorRekamMedis').value);
		var sNama = escape(document.getElementById('txtNamaPasien').value);
		
		var sLink = "nomr="+sNoMed+"&nama="+sNama;
		window.open('http://172.28.10.33/PrintLabelMR/PrintLabelMR.aspx?'+sLink,null,'left=400, top=100, height=200, width= 400, status=n o, resizable= no, scrollbars= no, toolbar= no,location= no, menubar= no');
		return;
	}

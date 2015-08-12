//
// 2003 AnthonieCh@Hotmail.com
//
var docId = document.body.id;

// user should never press f5

if (docId != 'bd_Lb_Hasil')  
{
if (document.all)
{           
    document.onkeydown = function ()
    {
		var key_f5 = 116; // 116 = F5          
        if (key_f5==event.keyCode)
        {
			event.keyCode=0;
			return false;
            // alert ("To refresh this page, please click open or save button.");
         }
         else
         {
			return true;
         }
         
    }
}
}


// declare global variables
//var toolbarOnButtonClick = navigationBar_commandBar.onbuttonclick;
var toolbarOnButtonClick = (typeof(navigationBar_commandBar) == 'undefined') ? null : navigationBar_commandBar.onbuttonclick ;

if (toolbarOnButtonClick != null)
	{
	navigationBar_commandBar.onbuttonclick = toolbarOnButtonClickHook; 
	}


function toolbarOnButtonClickHook() 
{
	
	var b = window.event.srcNode;
	if (b.getAttribute('ID') == 'tidDelete')
		{
		if (!confirm('Anda yakin ingin menghapus data ini ?')) return false; 
		return toolbarOnButtonClick(); 
		}
	else if (b.getAttribute('ID') == 'tidSave')
		{
			if (!confirm('Anda yakin akan save data ini ?')) 
				{
					return false;
				}
			else
				{
					if (checksubmit())
						{
							//return true;
						}
					else
						{
							return false;
						}
				}
		//if (!confirm('Anda yakin ingin save data ini ?')) return false; 
		return toolbarOnButtonClick(); 
		}
	else if (b.getAttribute('ID') == 'tidposting')
		{ 
			if (!confirm('Anda yakin akan posting data ini ?')) 
				{
					return false;
				}
			else
				{
					if (checksubmit())
						{
							//return true;
						}
					else
						{
							return false;
						}
				}   
		//if (!confirm('Anda yakin akan posting data ini?')) return false; 
		return toolbarOnButtonClick(); 
		}
	else if (b.getAttribute('ID') == 'tidbatal')
		{    
		if (!confirm('Anda yakin akan membatalkan data ini ?')) return false; 
		return toolbarOnButtonClick(); 
		}
	else if (b.getAttribute('ID') == 'tidNew')
		{
		if (docId == 'bdRJ')  // khusus untuk resep rawat jalan 
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/reseprj_selreg.aspx';
			} 
		else if (docId == 'bdRJ_Erha')  // khusus untuk resep rawat jalan Erha
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/PenjualanRJ/reseprj_selreg.aspx';
			} 	
		else if (docId == 'bdRJ_RSSM')  // Buat untuk resep rawat jalan Rssm
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/Pelayanan/PenjualanResep/PenjualanObatRJ/reseprj_selreg.aspx';
			}	
		else if (docId == 'bdRJ_DBF')  // khusus untuk resep rawat jalan dari DBF
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/reseprj_selreg2.aspx';
			} 		
		else if (docId == 'bdRI')  // khusus untuk resep rawat inap
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/resepri_selreg.aspx';
			}
		else if (docId == 'bdRI2')  // khusus untuk resep rawat inap
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/resepri_selreg2.aspx';
			}
		else if (docId == 'bdRI_Retur')  // khusus untuk retur resep rawat inap
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/returResepRI_selreg.aspx';
			}
		else if (docId == 'bdRO')  // khusus untuk resep odc
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/resepodc_selreg.aspx';
			}
		else if (docId == 'bdPB')  // ini buat pengiriman barang
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/pengirimanBarang_SelNo.aspx';
			}
		else if (docId == 'bd_RekapRJ_RSMM')  // Buat rekapitulasi rawat jalan RSMM
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/TransRekap_selreg.aspx';
			}
		else if (docId == 'bd_TransRJ_RSMM')  // Buat rekapitulasi rawat jalan RSMM
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/Transaksi_selreg.aspx';
			}
		else if (docId == 'bd_TransMCU_RSMM')  // Buat Transaksi MCU RSMM
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/MCU/SelRegMCU.aspx';
			}
		else if (docId == 'bd_TransMCU_RJ_RSMM')  // Buat Transaksi MCU RSMM
			{
			//alert(urlasli);
			window.location.href = urlasli + '/secure/transaksi/MCU/SelRegMCU_RJ.aspx';
			}
		else
			{
			return toolbarOnButtonClick(); 
			}
		}
		
	else
		{
		return toolbarOnButtonClick(); 
		}
}


function dlgDeleteRecordInGrid()
{
	if (!confirm('Anda yakin menghapus data ini ?')) return false;
	return true
}

function dlgVoidRecordInGrid()
{
	if (!confirm('Anda yakin membatalkan data ini ?')) return false;
	return true
}

function validasiQtyTerima()
{
	if (!confirm('Qty terima lebih besar dari Qty Pesan?')) return false;
	return true
}

function dlgUnpostData()
{
	if (!confirm('Anda yakin akan un-post data ini?')) return false;
	return true
}

function confirmPrint()
{
	if (!confirm('Anda yakin Mencetak dan Membayar tiket ini?')) return false;
	return true
}


function dlgBayar()
{
	if (!confirm('Anda yakin akan membayar resep ini?')) 
		{
			return false;
		}
	else
		{
			if (checksubmit())
				{
					return true;
				}
			else
				{
					return false;
				}
		}
	//return true
}


var submitcount=0;
function checksubmit()
{
	if (submitcount == 0){
		submitcount++;
		return true;
	}else {
		var sErrMsgNull = 'Your transaction being process. Thank You';
		alert (sErrMsgNull);
		return false;
	}
}

function dlgSaveData()
{
	if (!confirm('Anda yakin akan simpan data ini ?'))
		{
			return false;
		}
		else
		{
			if (checksubmit())
			{
					return true;
			}
			else
			{
					return false;
			}
	
	} 
	//if (!confirm('Anda yakin akan simpan data ini ?')) return false;
	//return true
}

function dlgProsesData()
{
	if (!confirm('Anda yakin akan proses data ini ?'))
		{
			return false;
		}
		else
		{
			if (checksubmit())
			{
					return true;
			}
			else
			{
					return false;
			}
	
	} 
}

/* this function shows the APPROVED text */	
function ShowPosting()	
	{		
	if(typeof(Popup)!=='undefined')
		{				
		/*x = event.clientX + document.body.scrollLeft; */
		var lebar;
		var tinggi;
		tinggi = delpx(Popup.currentStyle.height);        
		lebar = delpx(Popup.currentStyle.width);
		var x=(screen.availWidth-lebar)/2;
		var y=(screen.availHeight-tinggi)/2;	
		/* get the mouse left position */		
		/*y = event.clientY + document.body.scrollTop + 10; */
		/* get the mouse top position  */		
		Popup.style.display="block";                         
		/* display the pop-up */		
		Popup.style.left = x;                                
		/* set the pop-up's left */		
		Popup.style.top = y;                                 
		/* set the pop-up's top */	
		}
	}
	
/* this function shows the VOID text */	
function ShowVoid()	
	{		
	if(typeof(Popup)!=='undefined')
		{				
		/*x = event.clientX + document.body.scrollLeft; */
		var lebar;
		var tinggi;
		tinggi = delpx(Popup.currentStyle.height);        
		lebar = delpx(Popup.currentStyle.width);
		var x=(screen.availWidth-lebar)/2;
		var y=(screen.availHeight-tinggi)/2;	
		/* get the mouse left position */		
		/*y = event.clientY + document.body.scrollTop + 10; */
		/* get the mouse top position  */		
		Popup.style.display="block";                         
		/* display the pop-up */		
		Popup.style.left = x/2;                                
		/* set the pop-up's left */		
		Popup.style.top = y;                                 
		/* set the pop-up's top */	
		}
	}	
	
		
/* this function hides the APPROVED text */	
function HidePosting()	
	{
		if(typeof(Popup)!=='undefined')
		{
			Popup.style.display="none";                         
		}
	}
	
function center()
	{
	var xcenter=(screen.availWidth-800)/2;
	var ycenter=(screen.availHeight-600)/2;				
	self.resizeTo(800,600);
	self.moveTo(xcenter,ycenter);    
	}

// Ambil Parameter seperti request query string asp
function getParm(string,parm) {
	// returns value of parm from string
	var startPos = string.indexOf(parm + "=");
	if (startPos > -1) {
		startPos = startPos + parm.length + 1;
		var endPos = string.indexOf("&",startPos);
		if (endPos == -1)
			endPos = string.length;
		return unescape(string.substring(startPos,endPos));
	}
	return '';
}

// event untuk showdialog dengan key f2
function HookKeyCode(url,sv,ctrl,fn,oprm) 
{
	if (event.keyCode==113) // f2
	{
		var ret='';
		var prm='';
		var urljadi='';
		
		if(typeof(oprm)!=='undefined')
			prm=oprm;
		else
			prm='';	
			
		urljadi=url+'?csv='+sv+'&cfn='+fn+prm;
		ret=_sd(urljadi, ctrl);
		
		if(typeof(ret)!=='undefined')
		{
			try
			{				
				__doPostBack(ctrl,'');
				
			}
				catch(e){
			}			
		}
	}
}

function NewWindow(url, win_name, w, h, resizeble, scrollable) 
{
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	var scroll = 'no';
	
	if (typeof(scrollable)!=='undefined')
		{scroll = scrollable;}
	
	//status=no,toolbar=no,menubar=no,location=no
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',resizable='+resizeble+',scrollable='+scroll+',status=no,toolbar=no,menubar=no,location=no'
	win = window.open(url, win_name, winprops)

	if (parseInt(navigator.appVersion) >= 4) { win.window.focus();window.event.returnValue=false;}
}

function showInfoPasien(url, prm)
{
	var win = window.showModalDialog(url+prm,window,'dialogWidth: 550px; dialogHeight: 300px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
}

function showInfoReg(url, prm)
{
	var win = window.showModalDialog(url+prm,window,'dialogWidth: 550px; dialogHeight: 300px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
}

function showRegistrasiPMedis(url)
{
	var win = window.showModalDialog(url,window,'dialogWidth: 950px; dialogHeight: 600px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
}

function showInfoPegawai(url, prm)
{
	var win = window.showModalDialog(url+prm,window,'dialogWidth: 575px; dialogHeight: 350px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
}

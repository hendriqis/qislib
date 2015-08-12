//=====================================================
// D I A L O G   F U N C T I O N
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

// look up screen for Master Tarif Pelayanan
function ShowDialogTarifItem(ctrl)
{
	_sd(urlbtarifitem, ctrl);
}


// look up screen for rekam medis
function ShowDialogRekamMedis(ctrl)
{
	_sd(urlbrekammedis, ctrl);
}

// look up screen for Master Jasa Medik
function ShowDialogJasaMedik(ctrl)
{
	_sd(urlbjasamedik, ctrl);
}

// look up screen for Jasa Group
function ShowDialogJasaGroup(ctrl)
{
	_sd(urlbjasagroup, ctrl);
}

// look up screen for Master Medis
function ShowDialogMedis(ctrl)
{
	_sd(urlbmedis, ctrl);
}

// look up screen for Master Poliklinik
function ShowDialogPoliklinik(ctrl)
{
	_sd(urlbpoliklinik, ctrl);
}

// look up screen for Master SMF
function ShowDialogSMF(ctrl)
{
	_sd(urlbsmf, ctrl);
}

// look up screen for Master DTD
function ShowDialogDTD(ctrl)
{
	_sd(urlbdtd, ctrl);
}

// look up screen for Master Diagnosa
function ShowDialogDiagnosa(ctrl)
{
	_sd(urlbdiagnosa, ctrl);	
}

// look up screen for Master Instansi
function ShowDialogInstansi(ctrl)
{
	_sd(urlbinstansi, ctrl);
}

// look up screen for Master Kode Pos
function ShowDialogKodePos(ctrl)
{
	_sd(urlbkodepos, ctrl);
}

// look up screen for Master Bank
function ShowDialogBank(ctrl)
{
	_sd(urlbbank, ctrl);
}

// member
function ShowDialogMember(ctrl)
{
	_sd(urlbmember, ctrl);
}

// look up screen for Dokter 
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
}

// look up screen for Dokter Jasa Medis 
function ShowDialogDokterJasaMedis(ctrl)
{
	_sd(urlbdokterjasamedis, ctrl);
}

// look up screen for Pembayaran Jasa Medis RJ
function ShowDialogPembJM(ctrl)
{
	_sd(urlbpembjasamedis, ctrl);
}

// look up screen for Pembayaran Jasa Medis RI
function ShowDialogPembJMRI(ctrl)
{
	_sd(urlbpembjasamedisri, ctrl);
}

// look up screen for Header Standard Field
function ShowDialogStdField(ctrl)
{
	_sd(urlbstdfieldhd, ctrl);
}

// look up screen for Pengirim
function ShowDialogPengirim(ctrl)
{
	_sd(urlbpengirim, ctrl);
}

// look up screen for User Accounts
function ShowDialogUserAccounts(ctrl)
{
	_sd(urlbuseraccounts, ctrl);
}

// look up screen for Cara Keluar
function ShowDialogCaraKeluar(ctrl)
{
	_sd(urlbcarakeluar, ctrl);
}

function ShowDialogMorfologi(ctrl)
{
	_sd(urlbmorfologi, ctrl);
}

function ShowDialogGudang(ctrl)
{
	_sd(urlbgudang, ctrl);
}

function ShowDialogTindakan(ctrl)
{
	_sd(urlbtindakan, ctrl);
}

function ShowDialogDokterAns(ctrl)
{
	_sd(urlbdokterans, ctrl);
}

// look up screen for Ruang Perawatan
function ShowDialogRuang(ctrl)
{
	_sd(urlbruang, ctrl);
}
	
// look up screen for Penunjang Medis
function ShowDialogPnjMedis(ctrl)
{
	_sd(urlbpnjmedis, ctrl);
}			

// look up screen for Kelas
function ShowDialogKelas(ctrl)
{
	_sd(urlbkelas, ctrl);
}		

// look up screen for Pelayanan Rawat Inap
function ShowDialogPelayananRi(ctrl)
{
	_sd(urlbpelayananri, ctrl);
}		

// look up screen for Pelayanan Penunjang Medis
function ShowDialogPelayananMd(ctrl)
{
	_sd(urlbpelayananmd, ctrl);
}		

// look up screen for Gedung
function ShowDialogGedung(ctrl)
{
	_sd(urlbgedung, ctrl);
}		

// look up screen for Lantai
function ShowDialogLantai(ctrl)
{
	_sd(urlblantai, ctrl);
}	

// look up screen for Gudang Logistik
function ShowDialogGudangLog(ctrl)
{
	_sd(urlbgudanglog, ctrl);
}		
	
// look up screen for Dokter Jasa Medis 
function ShowDialogDokterJasaMedis(ctrl)
{
	_sd(urlbdokterjasamedis, ctrl);
}

// look up screen for Pembayaran Jasa Medis RJ
function ShowDialogPembJM(ctrl)
{
	_sd(urlbpembjasamedis, ctrl);
}

// look up screen for Pembayaran Jasa Medis RI
function ShowDialogPembJMRI(ctrl)
{
	_sd(urlbpembjasamedisri, ctrl);
}	
			
// main function
function _sd(url,ctrl)
{
	var retval=window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	// if(retval!="" && retval!=null)
	if(retval!=null)
	{
		try{
			document.getElementById(ctrl).value=retval[0];
			return retval;
			}
		catch(e){
				window.event.returnValue=false;
				}
	}
	else
	{
		window.event.returnValue=false;
	}
}

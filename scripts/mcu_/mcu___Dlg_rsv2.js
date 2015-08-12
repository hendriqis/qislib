// *********************************************************************************
// *                                                                               *
// *    (c) Copyright 1997-2002 QPro Sukses Mandiri, Pt.  All rights reserved.     *
// *    This material is proprietary to QPro Sukses Mandiri, PT. and may not be    *
// *    used, distributed or reproduced in any form or by an means without         *
// *    written expression from QPro Sukses Mandiri, Pt.  Any use, distribution    *
// *    or reproduction in any form or by any means without written permission     *
// *    QPro Sukses Mandiri, Pt. is a violation of federal copyright laws     	   *
// *    and international treaties.  Terms of use.                                 *
// *                                                                               *
// *********************************************************************************

//=====================================================
// D I A L O G   F U N C T I O N
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

// look up screen for Appointment
function showDialogAppMcuAll(ctrl)
{
	_sd(urlbAppAll, ctrl);
}

function showDialogAppMcuOK(ctrl)
{
	_sd(urlbAppOk, ctrl);
}

// look up screen for Registrasi di menu Pembayaran
function ShowDialogPembayaranRegistrasi(ctrl)
{
	_sd(urlbbayarreg, ctrl);
}

// look up screen for Pembayaran
function ShowDialogPembayaran(ctrl)
{
	_sd(urlbpembayaran, ctrl);
}

// look up screen for Pendidikan
function ShowDialogPendidikan(ctrl)
{
	_sd(urlbPendidikan, ctrl);
}

// look up screen for Agama
function ShowDialogAgama(ctrl)
{
	_sd(urlbAgama, ctrl);
}

// look up screen for Status Kawin
function ShowDialogStatusKawin(ctrl)
{
	_sd(urlbStatusKawin, ctrl);
}

// look up screen for Status Kewarganegaraan
function ShowDialogKewarganegaraan(ctrl)
{
	_sd(urlbKewarganegaraan, ctrl);
}

// look up screen for Pekerjaan
function ShowDialogPekerjaan(ctrl)
{
	_sd(urlbPekerjaan, ctrl);
}

// look up screen for Propinsi
function ShowDialogPropinsi(ctrl)
{
	_sd(urlbPropinsi, ctrl);
}

// look up screen for Suku
function ShowDialogSuku(ctrl)
{
	_sd(urlbSuku, ctrl);
}

//Dokter
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
}

//Dokter Radiographer
function ShowDialogDokterRadio(ctrl)
{
	_sd(urlbdokterradio, ctrl);
}

// look up screen for TarifPelayanan
function showDialogTarifPelayanan(ctrl)
{
	_sd(urlbTarifPelayanan, ctrl);
} 

// look up screen for Pelayanan
function showDialogTarifPelayananRJ(ctrl)
{
	_sd(urlbTarifPelayananRJ, ctrl);
} 

// look up screen for Pelayanan
function showDialogTarifPelayananPM(ctrl)
{
	_sd(urlbTarifPelayananPM, ctrl);
} 

// look up screen for Pelayanan
function showDialogTarifPelayananLB(ctrl)
{
	_sd(urlbTarifPelayananLB, ctrl);
}

// look up screen for Job Order MCU
function showDialogJobOrderMCU(ctrl)
{
	_sd(urlbJobOrderMCU, ctrl);
}

// look up screen for Registrasi pasien MCU
function showDialogRegistrasiMCU(ctrl)
{
	_sd(urlbregistrasimcu, ctrl);
}

// look up screen for Paket MCU
function showDialogPaketMCU(ctrl)
{
	_sd(urlbpaketmcu, ctrl);
}

// look up screen for Registrasi Hasil MCU
function ShowDialogRegistrasiHasilMCU(ctrl)
{
	_sd(urlbregistrasihasilmcu, ctrl);
}

// look up screen for Hasil MCU
function ShowDialogHasilMCU(ctrl)
{
	_sd(urlbhasilmcu, ctrl);
}

//look up screen for nobukti MCU
function ShowDialogNoBukti(ctrl)
{
	_sd(urlbnobukti, ctrl);
}

// another look-up screen.... registrasi !!
function showdialogregistrasi(ctrl)
{
	_sd(urlbregistrasi, ctrl);
}

// look up screen for rekam medis
function showDialogRekamMedis(ctrl)
{
	_sd(urlbRekamMedis, ctrl);
}

// look up screen for instansi
function showDialogInstansi(ctrl)
{
	_sd(urlbInstansi, ctrl);
}

// deskripsi pengirim
function showDialogPengirim(ctrl,kdg)
{
	_sd(urlbPengirim+'?gp='+kdg, ctrl);
}

// member
function showDialogMember(ctrl)
{
	_sd(urlbMember, ctrl);
}

// look up screen for Master Kode Pos
function ShowDialogKodePos(ctrl)
{
	_sd(urlbkodepos, ctrl);
}

// Matriks Pelayanan Penunjang Medis
function showDialogMatriksPelayananPnjMedis(ctrl,kdr,kdk)
{
	_sd(urlbMatriksPelayananPnjMedis+'?kdr='+kdr+'&kdk='+kdk, ctrl);
}

// look up screen for Matrix Pelayanan - Poliklinik
function ShowDialogMtxItemPoli(ctrl,sid)
{
	_sd(urlbmtxitempoli+'?kds='+sid,ctrl);
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

// per-cases function
function _sdRegRiNotClose(ctrl,jp)
{
	var url;
	
	//alert(jp);
	if(jp=='01')//Pasien Rawat Inap
		{
		url = urlbregrios;
		}
	else if(jp=='05')//Pasien UGD
		{
		url = urlbregrdos
		}
	else
		{
		url = urlbregrjos;
		}
	
	var retval =
		window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			//alert(typeof(ctrl));
			ctrl.value = retval[1] + " [" + retval[0] + "]";
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

function _sdRegRiNotCloseTxt(ctrl,ctrl2,jp)
{
	var url;
	
	//alert(jp);
	if(jp=='01')//Pasien Rawat Inap
		{
		url = urlbregri;
		}
	else if(jp=='05')//Pasien UGD
		{
		url = urlbregrd;
		}
	else
		{
		url = urlbregrj;
		}
	
	var retval =
		window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			//alert(typeof(ctrl));
			document.getElementById(ctrl).value = retval[0]
			document.getElementById(ctrl2).value = retval[1] 
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
function _sdDokterPE(ctrl)
{
	var retval =
		window.showModalDialog(urlbdokter,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			ctrl.value = retval[1] + " [" + retval[0] + "]";
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
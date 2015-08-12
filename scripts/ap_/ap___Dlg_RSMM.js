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
// D I A L O G   F U N C T I O N  // Ver: 2.0
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

// look up screen Matrix Diagnosa Medik Perawat
function ShowDialogMtxDiagMedikPerawat(ctrl,kdm)
{
	_sd(urlbMtxDiagMedikPerawat +'?kdm='+kdm, ctrl)
}

// look up screen Matrix Perawat DO
function ShowDialogMtxDO(ctrl,kdp)
{
	_sd(urlbMtxDO +'?kdp='+kdp, ctrl)
}

// look up screen Matrix Perawat DS
function ShowDialogMtxDS(ctrl,kdp)
{
	_sd(urlbMtxDS +'?kdp='+kdp, ctrl)
}

// look up screen Matrix Perawat Rencana
function ShowDialogMtxRencana(ctrl,kdp)
{
	_sd(urlbMtxRencana +'?kdp='+kdp, ctrl)
}

// look up screen Matrix Perawat Tujuan
function ShowDialogMtxTujuan(ctrl,kdp)
{
	_sd(urlbMtxTujuan +'?kdp='+kdp , ctrl)
}

// look up screen Transaksi Perawat DO
function ShowDialogTransDO(ctrl,chd)
{
	_sd(urlbTransDO +'?chd='+chd, ctrl)
}

// look up screen Transaksi Perawat DS
function ShowDialogTransDS(ctrl,chd)
{
	_sd(urlbTransDS +'?chd='+chd, ctrl)
}

// look up screen Nomor Bukti Rencana Askep
function ShowDialogNoBukti(ctrl)
{
	_sd(urlbNoBukti, ctrl)
}

// look up screen Nomor Registrasi Rencana Askep
function ShowDialogNoRegAskep(ctrl)
{
	_sd(urlbNoRegAskep, ctrl)
}

// look up screen Diagnosa Medik
function ShowDialogDiagMedik(ctrl)
{
	_sd(urlbDiagMedik, ctrl)
}

// look up screen Diagnosa Perawat
function ShowDialogDiagPerawat(ctrl)
{
	_sd(urlbDiagPerawat, ctrl)
}

// look up screen DO
function ShowDialogDO(ctrl)
{
	_sd(urlbDO, ctrl)
}

// look up screen DS
function ShowDialogDS(ctrl)
{
	_sd(urlbDS, ctrl)
}

// look up screen Kaji
function ShowDialogKaji(ctrl)
{
	_sd(urlbKaji, ctrl)
}

// look up screen Item
function ShowDialogItem(ctrl)
{
	_sd(urlbItem, ctrl)
}

// look up screen Rencana
function ShowDialogRencana(ctrl)
{
	_sd(urlbRencana, ctrl)
}

// look up screen Tujuan Jangka Pendek
function ShowDialogTujuanJangkaPendek(ctrl)
{
	_sd(urlbTujuanJangkaPendek, ctrl)
}

// look up screen Matrix Item Kaji
function ShowDialogMtxItemKaji(ctrl)
{
	_sd(urlbMtxItemKaji, ctrl)
}

// look up screen Transaksi
function ShowDialogTransaksi(ctrl)
{
	_sd(urlbTransaksi, ctrl)
}

// BIDAN
function showDialogBidan(ctrl)
{
	_sd(urlbBidan, ctrl);
}

// DOKTER
function showDialogDokter(ctrl)
{
	_sd(urlbDokter, ctrl);
}

// DOKTER
function showDialogDokterAll(ctrl)
{
	_sd(urlbDokterall, ctrl);
}


// BAYIREG
function showDialogBayiReg(ctrl)
{
	_sd(urlbBayiReg, ctrl);
}

// BAYI
function showDialogBayi(ctrl)
{
	_sd(urlbBayi, ctrl);
}

// look up screen for Tempat Tidur 
function showDialogTempatTidur(ctrl,kdr,kdk)
{
	_sd(urlbTempatTidur+'?kdr='+kdr+'&kdk='+kdk, ctrl);
}

// look up screen for Ruang
function showDialogRuang(ctrl)
{
	_sd(urlbRuang, ctrl);
} 

// look up screen for Kelas
function showDialogKelas(ctrl)
{
	_sd(urlbKelas, ctrl);
} 

// look up screen for rekam medis
function showDialogRekamMedis(ctrl)
{
	_sd(urlbRekamMedis, ctrl);
}

// look up screen for dokter
function showDialogDokter(ctrl)
{
	_sd(urlbDokter, ctrl);
}

// look up screen for Standart Field
function showDialogStdField(ctrl,kdf)
{
	_sd(urlbStdField+'?kdf='+kdf, ctrl);
} 

// another look-up screen.... registrasi !!
function showDialogRegistrasi(ctrl,kdr)
{
	_sd(urlbRegistrasi+'?kdr='+kdr, ctrl);
}

function showDialogRegistrasiWithBatal(ctrl)
{
	_sd(urlbRegistrasiwithbatal, ctrl);
}

function showDialogRegistrasiWithOutBatal(ctrl)
{
	_sd(urlbRegistrasiwithoutbatal, ctrl);
}

// another look-up screen.... diagnosa !!
function showDialogDiagnosa(ctrl)
{
	_sd(urlbDiagnosa, ctrl);
}


function _sd(url,ctrl)
{
	var isReadOnly=document.getElementById(ctrl).getAttribute("readOnly");
	var isDisabled=document.getElementById(ctrl).getAttribute("disabled");
	if (isReadOnly==true||isDisabled==true)
	{
		alert('Cannot currently modify this field, it is read-only.');
		window.event.returnValue=false;
	}
	else
	{
		var retval=window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
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
}

function _sdFromGrid(url, ctrl)
{
	var retval =
		window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			ctrl.value = retval[0];
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
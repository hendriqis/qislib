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

// look up screen for Master Jasa Medis
function showDialogJasaMedis(ctrl)
{
	_sd(urlbJasaMedis, ctrl);
}

// DOKTER
function showDialogDokter(ctrl)
{
	_sd(urlbDokter, ctrl);
}


// BAYI
function showDialogBayi(ctrl)
{
	_sd(urlbBayi, ctrl);
}

// DTD
function showDialogDTD(ctrl)
{
	_sd(urlbDTD, ctrl);
}


// Diagnosa
function showDialogDiagnosa(ctrl)
{
	_sd(urlbDiagnosa, ctrl);
}


// Tindakan
function showDialogTindakan(ctrl)
{
	_sd(urlbTindakan, ctrl);
}

// Penunjang Medis
function showDialogPnjMedis(ctrl)
{
	_sd(urlbPnjMedis, ctrl);
}

// Obat
function showDialogObat(ctrl,kdr)
{
	_sd(urlbObat+'?kdr='+kdr, ctrl);
}

// Obat
function showDialogLogistik(ctrl,kdr)
{
	_sd(urlbLogistik+'?kdr='+kdr, ctrl);
}

// Transaksi Pasien Langsung Penunjang Medis
function showDialogTransPnj(ctrl,kdr)
{
	_sd(urlbTransPnj+'?kdr='+kdr, ctrl);
}

// Matriks Pelayanan
function showDialogMatriksPelayanan(ctrl,kdr)
{
	_sd(urlbMatriksPelayanan+'?kdr='+kdr, ctrl);
}

// Matriks Pelayanan Penunjang Medis
function showDialogMatriksPelayananPnjMedis(ctrl,kdr)
{
	_sd(urlbMatriksPelayananPnjMedis+'?kdr='+kdr, ctrl);
}

function showDialogMatriksPelayananPnjMedisRI(ctrl,kdr)
{
	_sd(urlbMatriksPelayananPnjMedisRI+'?kdr='+kdr, ctrl);
}

// transaksi
function showDialogTransaksi(ctrl,inoreg)
{
	_sd(urlbTransaksi+'?inoreg='+inoreg, ctrl);
}

// transaksi
function showDialogNoBukti(ctrl,inoreg,pmedis)
{
	_sd(urlbNoBukti+'?inoreg='+inoreg+'&pmedis='+pmedis, ctrl);
}

// transaksi penunjang medis rawat jalan
function showDialogNoBuktiRj(ctrl,inoreg)
{
	_sd(urlbNoBuktiRj+'?inoreg='+inoreg, ctrl);
}

// outstanding reservasi
function showDialogOutstandingReservasi(ctrl)
{
	_sd(urlbOReservasi, ctrl);
}

//farmasi
function showDialogFarmasi(ctrl)
{
	_sd(urlbFarmasi, ctrl);
}

// morfologi
function showDialogMorfologi(ctrl)
{
	_sd(urlbMorfologi, ctrl);
}

// member
function showDialogMember(ctrl)
{
	_sd(urlbMember, ctrl);
}


// smf
function showDialogSMF(ctrl)
{
	_sd(urlbSMF, ctrl);
}


// deskripsi pengirim
function showDialogPengirim(ctrl,kdg)
{
	_sd(urlbPengirim+'?gp='+kdg, ctrl);
}

// look up screen for nomor tt
function showDialogTempatTidur(ctrl,kdr,kdk)
{
	_sd(urlbTempatTidur+'?kdr='+kdr+'&kdk='+kdk, ctrl);
}

// look up screen for Tempat Tidur By Number
function showDialogTempatTidurByNoTT(ctrl)
{
	_sd(urlbTempatTidurByNoTT, ctrl);
} 

// look up screen for Ruang
function showDialogRuang(ctrl)
{
	_sd(urlbRuang, ctrl);
} 


// look up screen for Pelayanan
function showDialogPelayanan(ctrl)
{
	_sd(urlbPelayanan, ctrl);
} 

// look up screen for Gudang
function showDialogGudang(ctrl)
{
	_sd(urlbGudang, ctrl);
} 

// look up screen for Gudang
function showDialogGudangLg(ctrl)
{
	_sd(urlbGudangLg, ctrl);
} 

// look up screen for Gedung
function showDialogGedung(ctrl)
{
	_sd(urlbGedung, ctrl);
} 

// look up screen for Lantai
function showDialogLantai(ctrl)
{
	_sd(urlbLantai, ctrl);
} 

// look up screen for Kelas
function showDialogKelas(ctrl)
{
	_sd(urlbKelas, ctrl);
} 

// look up screen for KelompokTarif
function showDialogKelompokTarif(ctrl)
{
	_sd(urlbKelompokTarif, ctrl);
} 

// look up screen for KelompokTarif for MD
function showDialogKelompokTarifMD(ctrl)
{
	_sd(urlbKelompokTarifMD, ctrl);
} 

// look up screen for TarifPelayanan
function showDialogTarifPelayanan(ctrl)
{
	_sd(urlbTarifPelayanan, ctrl);
} 

// look up screen for Reservasi
function showDialogReservasi(ctrl)
{
	_sd(urlbReservasi, ctrl);
} 

// look up screen for kodepos
function showDialogKodePos(ctrl)
{
	_sd(urlbKodePos, ctrl);
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

// look up screen for instansi
function showDialogInstansi(ctrl)
{
	_sd(urlbInstansi, ctrl);
}

// look up screen for Standart Field
function showDialogStdField(ctrl,kdf)
{
	_sd(urlbStdField+'?kdf='+kdf, ctrl);
} 

// another look-up screen.... registrasi !!
function showDialogRegistrasi(ctrl)
{

	_sd(urlbRegistrasi, ctrl);
}

// another look-up screen.... diagnosa !!
function showDialogDiagnosa(ctrl)
{
	_sd(urlbDiagnosa, ctrl);
}

// another look-up screen.... nomorBukti Penunggu !!
function showDialogPenunggu(ctrl,inoreg)
{
	_sd(urlbPenunggu+'?inoreg='+inoreg, ctrl);
}

// another look-up screen.... penunjang medis per noreg !!
function showDialogPnjMedisperNoreg(ctrl,inoreg)
{
	_sd(urlbPnjmedisperNoreg+'?inoreg='+inoreg, ctrl);
}

// another look-up screen.... penunjang medis per noreg Rawat Inap!!
function showDialogPnjMedisperNoregRI(ctrl,inoreg)
{
	_sd(urlbPnjmedisperNoregRI+'?inoreg='+inoreg, ctrl);
}

// another look-up screen.... registrasi per norm !!
function showDialogRegistrasiperNorm(ctrl,inorm)
{
	_sd(urlbRegistrasiPerNorm+'?inorm='+inorm, ctrl);
}

// another look-up screen.... registrasi per norm Rawat Inap!!
function showDialogRegistrasiperNormRI(ctrl,inorm)
{
	_sd(urlbRegistrasiPerNormRI+'?inorm='+inorm, ctrl);
}

// another look-up screen.... registrasi per norm Rawat Darurat!!
function showDialogRegistrasiRDperNorm(ctrl,inorm)
{
	_sd(urlbRegistrasiRDPerNorm+'?inorm='+inorm, ctrl);
}

// look up screen for No Bukti Transaksi Paket By NoRM and kdpenunjang
function ShowDialogPaketTindakanRJMTX(ctrl,norm,kdpmedis)
{
	_sd(urlbpakettindakanrjmtx+'?norm='+norm+'&kdpmedis='+kdpmedis,ctrl)
}

// another No Bukti Transaksi Paket!!
function ShowDialogPaketTindakanRJ(ctrl)
{
	_sd(urlbpakettindakanrj, ctrl);
}

// look up screen for Dokter Pengirim
function showDialogDokterPengirim(ctrl)
{
	_sd(urlbDokterPengirim, ctrl);
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

// transaksiUGD
function showDialogTransaksiRD(ctrl,inoreg)
{
	_sd(urlbTransaksiRD+'?inoreg='+inoreg, ctrl);
}

// main function
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
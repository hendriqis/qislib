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

// Kode Terminal Berdasarkan Kode Instansi
function ShowDialogTerminalByInstansi(ctrl,kdinstansi)
{
	_sd(urlbTerminalByInstansi+'?kdinstansi='+kdinstansi, ctrl);
}

// look up screen for Registrasi tdk batal
function ShowDialogRegistrasitdkbtl(ctrl)
{
	_sd(urlbregistrasitdkbtl, ctrl);	
}
function showDialogStdfield(ctrl,kdfield)
{
	_sd(urlbStdfield+'?kdfield='+kdfield, ctrl);
}

//Group
function ShowDialogGroup(ctrl)
{
	_sd(urlbgroup, ctrl);
}

// look up screen for NoJO By NoReg
function ShowDialogNoJOByNoReg(ctrl,noreg)
{
	_sd(urlbnojobynoreg+'?noreg='+noreg,ctrl)
}

// look up screen for Aktiva
function showDialogAktiva(ctrl)
{
	_sd(urlbAktiva, ctrl);
}

function showDialogAktiva(ctrl,kdLayan)
{
	_sd(urlbAktivabykdlayan+'?kdl='+kdLayan, ctrl);
}

// look up screen for Jenis Diagnosa
function ShowDialogJenisDiagnosa(ctrl)
{
	_sd(urlbJenisDiagnosa, ctrl);
}

// member
function showDialogMember(ctrl)
{
	_sd(urlbMember, ctrl);
}

// look up screen for kodepos
function showDialogKodePos(ctrl)
{
	_sd(urlbKodePos, ctrl);
}

// look up screen for Suku
function ShowDialogSuku(ctrl)
{
	_sd(urlbSuku, ctrl);
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

// look up screen for Master Kode Pos
function ShowDialogKodePos(ctrl)
{
	_sd(urlbkodepos, ctrl);
}

//Instansi
function ShowDialogInstansi(ctrl)
{
	_sd(urlbinstansi, ctrl);
}

// look up screen for KelompokTarif
function showDialogKelompokTarif(ctrl)
{
	_sd(urlbKelompokTarif, ctrl);
} 

// Jasa Medis
function showDialogJasaMedis(ctrl)
{
	_sd(urlbJasaMedis, ctrl);
}

// Obat Di Farmasi
function showDialogFarmasi(ctrl)
{
	_sd(urlbfarmasi, ctrl);
}

// look up screen for Tarif
function ShowDialogTarif(ctrl)
{
	_sd(urlbTarif, ctrl);
} 

// look up screen for TarifPelayanan
function showDialogTarifPelayanan(ctrl)
{
	_sd(urlbTarifPelayanan, ctrl);
} 

// look up screen for rekam medis
function showDialogRekamMedis(ctrl)
{
	_sd(urlbRekamMedis, ctrl);
}

// look up screen for Pasien - Aktif
function ShowDialogPasienAktif(ctrl)
{
	_sd(urlbpasienaktif, ctrl);
}

// look up screen for rekam medis piutang
function showDialogRekamMedisPiutang(ctrl)
{
	_sd(urlbRekamMedisPiutang, ctrl);
}

// look up screen for AlasanBerobat
function showDialogAlasanBerobat(ctrl)
{
	_sd(urlbAlasanBerobat, ctrl);
} 

// look up screen for DetailAlasanBerobat
function showDialogDetailAlasan(ctrl, kdl)
{
	_sd(urlbDetailAlasan+'?kdl='+kdl, ctrl);
} 

// look up screen for Master SMF
function ShowDialogSMF(ctrl)
{
	_sd(urlbsmf, ctrl);
}


// look up screen for DTD
function ShowDialogDTD(ctrl)
{
	_sd(urlbDTD, ctrl);
} 

// look up screen for DeksripsiAlasanBerobat
function showDialogDeksripsiAlasan(ctrl, kdl, kdl1)
{
	_sd(urlbDeksripsiAlasan+'?kdl='+kdl+'&kdl1='+kdl1, ctrl);
} 

// look up screen for Master Diagnosa
function ShowDialogDiagnosa(ctrl)
{
	_sd(urlbdiagnosa, ctrl);	
}

// look up screen for Master Tindakan
function ShowDialogTindakan(ctrl)
{
	_sd(urlbtindakan, ctrl);
}

// look up screen for Master Dokter Anestesi
function ShowDialogDokterAns(ctrl)
{
	_sd(urlbdokterans, ctrl);
}

// look up screen for Master Dokter
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
}

// look up screen for Master Dokter
function ShowDialogDokterAll(ctrl)
{
	_sd(urlbdokterall, ctrl);
}

// lookupscreen for Bank !!
function showDialogBank(ctrl)
{
	_sd(urlbBank, ctrl);
}

// look up screen for Master Morfologi
function ShowDialogMorfologi(ctrl)
{
	_sd(urlbmorfologi, ctrl);
}

// look up screen for Registrasi
function ShowDialogRegistrasi(ctrl)
{
	_sd(urlbregistrasi, ctrl);	
}

// look up screen for Registrasi Pembayaran
function ShowDialogRegistrasiBayar(ctrl)
{
	_sd(urlbregistrasibayar, ctrl);	
}

//Pengirim
function ShowDialogPengirim(ctrl,sid)
{
	_sd(urlbpengirim+'?kds='+sid,ctrl);
}

// lookupscreen for Tagihan Piutang Instansi !!
function showDialogTagihanPiutangInstansi(ctrl)
{
	_sd(urlbTagihanPiutangInstansi, ctrl);
}

// look up screen for instansi piutang
function showDialogInstansiPiutang(ctrl)
{
	_sd(urlbInstansiPiutang, ctrl);
}

// lookupscreen for Nomor Invoice Instansi !!
function showDialogNoInvoice(ctrl)
{
	_sd(urlbNoInvoice, ctrl);
}

// lookupscreen for Nomor Invoice Pribadi !!
function showDialogNoInvoicePbd(ctrl)
{
	_sd(urlbNoInvoicePbd, ctrl);
}

// lookupscreen for Tagihan Piutang Instansi !!
function showDialogTagihanPiutangInstansi(ctrl)
{
	_sd(urlbTagihanPiutangInstansi, ctrl);
}
// lookupscreen for Tagihan Piutang Pribadi !!
function showDialogTagihanPiutangPribadi(ctrl)
{
	_sd(urlbTagihanPiutangPribadi, ctrl);
}

// look up screen for rekam medis bayar piutang
function showDialogRekamMedisBayarPiutang(ctrl)
{
	_sd(urlbRekamMedisBayarPiutang, ctrl);
}

// look up screen for instansi bayar piutang
function showDialogInstansiBayarpiutang(ctrl)
{
	_sd(urlbInstansiBayarPiutang, ctrl);
}

// Penunjang Medis
function showDialogPnjMedis(ctrl)
{
	_sd(urlbPnjMedis, ctrl);
}

// look up screen for Diagnosa Kecelakaan
function ShowDialogDiagKecelakaan(ctrl)
{
	_sd(urlbkecelakaan, ctrl);	
}

//look up screen for No Reg berdasarkan Norm
function ShowDialogRegPerNorm(ctrl,sid)
{
	_sd(urlbregpernorm+'?kds='+sid,ctrl);
}

//Pegawai
function ShowDialogPegawai(ctrl)
{
	_sd(urlbPegawai, ctrl);
}

// transaksi
function showDialogTransaksi(ctrl,inoreg)
{
	_sd(urlbTransaksi+'?inoreg='+inoreg, ctrl);
}

//Obat
function showDialogObat(ctrl, kdr, kdr1)
{
	_sd(urlbObat+'?kdr='+kdr+'&kdr1='+kdr1, ctrl);
}

//Obat Logistik
function showDialogObatLG(ctrl, kdr, kdr1)
{
	_sd(urlbObatLG+'?kdr='+kdr+'&kdr1='+kdr1, ctrl);
}

// Matriks Pelayanan Penunjang Medis
function showDialogMatriksPelayananPnjMedis(ctrl,kdr,kdr1)
{
	_sd(urlbMatriksPelayananPnjMedis+'?kdr='+kdr+'&kdr1='+kdr1, ctrl);
}
	
// Obat MD
function showDialogObatMD(ctrl,kdr)
{
	_sd(urlbObatMD+'?kdr='+kdr, ctrl);
}

// Logistik
function showDialogLogistik(ctrl,kdr)
{
	_sd(urlbLogistik+'?kdr='+kdr, ctrl);
}

// look up screen for Pembayaran
function ShowDialogPembayaran(ctrl)
{
	_sd(urlbpembayaran, ctrl);
}

// Write Off Instansi
function showDialogWriteOffInstansi(ctrl,taw,tak)
{
	_sd(urlbWriteOffInstansi+'?taw='+taw+'&tak='+tak, ctrl);
}


// write off pribadi
function showDialogWriteOffPribadi(ctrl,taw,tak)
{
	_sd(urlbWriteOffPribadi+'?taw='+taw+'&tak='+tak, ctrl);
}

// look up screen for User Accounts
function showDialogUserAccounts(ctrl)
{
	_sd(urlbuseraccounts, ctrl);
}

// look up screen for No. Batch By KdItem
function ShowDialogNoBatchByKdItem(ctrl,kdi)
{
	_sd(urlbnobatchbykditem+'?kdi='+kdi,ctrl);
}

// look up screen for Test Lab
function ShowDialogTest(ctrl)
{
	_sd(urlbtest, ctrl);
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
}


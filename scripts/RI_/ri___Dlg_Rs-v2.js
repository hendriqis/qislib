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
// look up screen for Group Ruang
function showDialogGroupRuang(ctrl)
{
	_sd(urlbGroupRuang, ctrl);
}

// look up screen for KelasRM
function showDialogKelasRM(ctrl)
{
	_sd(urlbKelasRM, ctrl);
}

//Group
function ShowDialogGroup(ctrl)
{
	_sd(urlbgroup, ctrl);
}

// look up screen for Aktiva
function showDialogAktiva(ctrl)
{
	_sd(urlbAktiva, ctrl);
}

// Untuk Dokter Radiologi
function ShowDialogDokterRadio(ctrl)
{
	_sd(urlbdokterradio, ctrl);
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

// Barang2 Di Logistik
function showDialogLogistik(ctrl)
{
	_sd(urlbLogistik, ctrl);
}

// look up screen for Test Lab
function ShowDialogTest(ctrl)
{
	_sd(urlbtest, ctrl);
}

// look up screen for Pasien - Aktif
function ShowDialogPasienAktif(ctrl)
{
	_sd(urlbpasienaktif, ctrl);
}

// Untuk Dokter Anasthesi
function ShowDialogDokterAns(ctrl)
{
	_sd(urlbdokterans, ctrl);
}

// look up screen for Keadaan keluar
function ShowDialogKdnKeluar(ctrl)
{
	_sd(urlbkdnkeluar, ctrl);
}

// look up screen for Cara Keluar
function ShowDialogCaraKeluar(ctrl)
{
	_sd(urlbcarakeluar, ctrl);
}

// Untuk Registrasi berdasarkan norm
function ShowDialogRegPerNorm(ctrl,sid)
{
	_sd(urlbregpernorm+'?kds='+sid,ctrl);
}

// Untuk Transfusi Darah
function showDialogTransfusiDarah(ctrl)
{
	_sd(urlbTransfusiDarah, ctrl);
}

// Untuk Transfusi Darah Lab
function showDialogNoLab(ctrl)
{
	_sd(urlbNoLab, ctrl);
}

// Untuk Off Set Selisih
function showDialogResep(ctrl,kdr)
{
	_sd(urlbResep+'?kdr='+kdr, ctrl);
}

// Untuk Off Set Selisih
function showDialogReturResep(ctrl,kdr)
{
	_sd(urlbReturResep+'?kdr='+kdr, ctrl);
}

// Untuk Off Set Selisih
function showDialogOffSetSelisih(ctrl,kdr)
{
	_sdFromGrid(urlbOffSetSelisih+'?kdr='+kdr, ctrl);
}

// Untuk Off Set Pribadi
function showDialogOffSetPribadi(ctrl,kdr)
{
	_sdFromGrid(urlbOffSetPribadi+'?kdr='+kdr, ctrl);
}

// Untuk Off Set Instansi 
function showDialogOffSetInstansi(ctrl,kdr)
{
	_sdFromGrid(urlbOffSetInstansi+'?kdr='+kdr, ctrl);
}


// Obat Di Farmasi
function showDialogFarmasi(ctrl)
{
	_sd(urlbFarmasi, ctrl);
}

// Obat berdasarkan penunjang medis
function showDialogObatPmd(ctrl,kdr)
{
	_sd(urlbObatPmd+'?kdr='+kdr, ctrl);
}

// Logistik berdasarkan penunjang medis
function showDialogLogistikPmd(ctrl,kdr)
{
	_sd(urlbLogistikPmd+'?kdr='+kdr, ctrl);
}

// Matriks Pelayanan Penunjang Medis
function showDialogMatriksPelayananPnjMedis(ctrl,kdr,kdk)
{
	_sd(urlbMatriksPelayananPnjMedis+'?kdr='+kdr+'&kdk='+kdk, ctrl);
}

// Penunjang Medis
function showDialogPnjMedis(ctrl)
{
	_sd(urlbPnjMedis, ctrl);
}


// Jasa Medis
function showDialogJasaMedis(ctrl)
{
	_sd(urlbJasaMedis, ctrl);
}


// TEMPATLAHIRBAYI
function showDialogTempatLahirBayi(ctrl)
{
	_sd(urlbTempatLahirBayi, ctrl);
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
// Dokter rawat inap
function showDialogDokterRi(ctrl)
{
	_sd(urlbDokterRi, ctrl);
}

// BAYIREG
function showDialogBayiReg(ctrl)
{
	_sd(urlbBayiReg, ctrl);
}

// IBUREG
function showDialogIbuReg(ctrl)
{
	_sd(urlbIbuReg, ctrl);
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

// Obat
function showDialogObat(ctrl,kdr)
{
	_sd(urlbObat+'?kdr='+kdr, ctrl);
}

// Barang Logistik
function showDialogObatLG(ctrl,kdr)
{
	_sd(urlbObatLG+'?kdr='+kdr, ctrl);
}

// Matriks Pelayanan
function showDialogMatriksPelayanan(ctrl,kdr,kdk)
{
	_sd(urlbMatriksPelayanan+'?kdr='+kdr+'&kdk='+kdk, ctrl);
}

// transaksi
function showDialogTransaksi(ctrl,inoreg)
{
	_sd(urlbTransaksi+'?inoreg='+inoreg, ctrl);
}

// outstanding reservasi
function showDialogOutstandingReservasi(ctrl)
{
	_sd(urlbOReservasi, ctrl);
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

// look up screen for Pelayanan Penunjang Medis
function showDialogPelayananPnjMedis(ctrl)
{
	_sd(urlbPelayananPnjMedis, ctrl);
} 

// look up screen for Gudang
function showDialogGudang(ctrl)
{
	_sd(urlbGudang, ctrl);
} 

// look up screen for Gudang Logistik
function showDialogGudangLG(ctrl)
{
	_sd(urlbGudanglg, ctrl);
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

// look up screen for Kelas Per Ruang
function showDialogKelasPerRuang(ctrl,kdruang)
{
	_sd(urlbKelasPerRuang+'?kdruang='+kdruang, ctrl);
}

// look up screen for Ruang Per Kelas
function showDialogRuangPerKelas(ctrl,kdkelas)
{
	_sd(urlbRuangPerKelas+'?kdkelas='+kdkelas, ctrl);
}

// look up screen Pegawai
function showDialogPegawai(ctrl)
{
	_sd(urlbPegawai, ctrl);
}

// look up screen for KelompokTarif
function showDialogKelompokTarif(ctrl)
{
	_sd(urlbKelompokTarif, ctrl);
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


// look up screen for Reservasi
function showDialogWaitingList(ctrl)
{
	_sd(urlbWaitingList, ctrl);
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

// look up screen for rekam medis piutang
function showDialogRekamMedisPiutang(ctrl)
{
	_sd(urlbRekamMedisPiutang, ctrl);
}
// look up screen for rekam medis bayar piutang
function showDialogRekamMedisBayarPiutang(ctrl)
{
	_sd(urlbRekamMedisBayarPiutang, ctrl);
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

// look up screen for instansi piutang
function showDialogInstansiPiutang(ctrl)
{
	_sd(urlbInstansiPiutang, ctrl);
}

// look up screen for instansi bayar piutang
function showDialogInstansiBayarpiutang(ctrl)
{
	_sd(urlbInstansiBayarPiutang, ctrl);
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

// another look-up screen.... registrasi rj transfer!!
function showDialogRegistrasiRJ(ctrl, inorm)
{
	_sd(urlbRegistrasiRJ+'?inorm='+inorm, ctrl);
}

// another look-up screen.... registrasi rd transfer!!
function showDialogRegistrasiRD(ctrl, inorm)
{
	_sd(urlbRegistrasiRD+'?inorm='+inorm,  ctrl);
}

// another look-up screen.... registrasi md transfer!!
function showDialogRegistrasiMD(ctrl,inorm,kdr)
{
	_sd(urlbRegistrasiMD+'?inorm='+inorm+'&kdr='+kdr,ctrl)
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

// another look-up screen.... nomorBukti Penunggu !!
function showDialogPenunggu(ctrl,inoreg)
{
	_sd(urlbPenunggu+'?inoreg='+inoreg, ctrl);
}
// lookupscreen for pembayaran !!
function showDialogPembayaran(ctrl)
{
	_sd(urlbPembayaran, ctrl);
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

// lookupscreen for Bank !!
function showDialogBank(ctrl)
{
	_sd(urlbBank, ctrl);
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

// lookupscreen for Berkas RM !!
function showDialogBerkasRM(ctrl)
{
	_sd(urlbberkasrm, ctrl);
}

// look up screen for Plafon Instansi
function showDialogPlafon(ctrl,nid,pid)
{
	_sd(urlbPlafon+'?nid='+nid+'&pid='+pid,ctrl)
}

// lookupscreen for Analisa Berkas RM !!
function showDialogAnalisaRM(ctrl,kdfield)
{
	_sd(urlbAnalisaRM+'?kdfield='+kdfield, ctrl);
}

// look up screen for Item Logistik By Gudang and Lokasi
function showDialogItemLogistik(ctrl,gid,lid)
{
	_sd(urlbitemlogistik+'?kdg='+gid+'&kdl='+lid,ctrl)
}

// look up screen for Item Farmasi By Gudang and Lokasi
function showDialogItemFarmasi(ctrl,gid,lid)
{
	_sd(urlbitemfarmasi+'?kdg='+gid+'&kdl='+lid,ctrl)
}

// look up screen for Gudang Logistik Aktif
function showDialogGudangLogistik(ctrl)
{
	_sd(urlbgudanglogistik, ctrl);
}

// look up screen for Gudang Farmasi Aktif
function showDialogGudangFarmasi(ctrl)
{
	_sd(urlbgudangfarmasi, ctrl);
}

// Jasa Medis
function showDialogJasaMedis(ctrl)
{
	_sd(urlbJasaMedis, ctrl);
}

// Pelayanan Penunjang Medis
function showDialogLayanPnjMedis(ctrl)
{
	_sd(urlbLayanPnjMedis, ctrl);
}

// look up screen for No. Batch By KdItem
function ShowDialogNoBatchByKdItem(ctrl,kdi)
{
	_sd(urlbnobatchbykditem+'?kdi='+kdi,ctrl);
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
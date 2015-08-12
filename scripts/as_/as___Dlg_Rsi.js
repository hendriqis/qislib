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



// look up screen for kode masalah
function ShowDialogMasalah(ctrl)
{
	_sd(urlmasalah,ctrl)
}

// look up screen for kode diagnosa askep
function showDialogDiagnosaask(ctrl,noreg,kdm)
{
	_sd(urldiagnosaask+'?noreg='+noreg+'&kdm='+kdm, ctrl);
}

// look up screen for aturan pakai
function ShowDialogAturan(ctrl)
{
	_sd(urlatur, ctrl)
}

// look up screen for lokasi --for update on 20-12-2004
function ShowDialogLokasi(ctrl,gid)
{
	_sd(urlblokasi+'?kdg='+gid,ctrl) 
} 

 // look up screen for Plafon Instansi
function ShowDialogPlafon(ctrl,nid,pid)
{
	_sd(urlbplafon+'?nid='+nid+'&pid='+pid,ctrl)
}

 // look up screen for Master Kelas
function ShowDialogKelas(ctrl)
{
	_sd(urlbkelas, ctrl);
}

 // look up screen for Kode Dokter
function ShowDialogKdDokter(ctrl)
{
	_sd(urlbKdDokter, ctrl);
}
 
 // look up screen for Kode Dokter Rawat Jalan
function ShowDialogKdDokterRj(ctrl)
{
	_sd(urlbKdDokterRj, ctrl);
}
            
// look up screen for Kode Dokter Rawat Inap
function ShowDialogKdDokterRi(ctrl)
{
	_sd(urlbKdDokterRi, ctrl);
}
            
 // look up screen for Nomor Bukti
function ShowDialogNoBukti(ctrl)
{
	_sd(urlbNoBukti, ctrl);
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

// look up screen for Master Kasus
function ShowDialogKasus(ctrl)
{
	_sd(urlbkasus, ctrl);
}

// look up screen for Master Kasus -Policlinic Filtered-
function ShowDialogKasusByPoliklinik(ctrl,sid)
{
	_sd(urlbkasusbypoli+'?kds='+sid,ctrl);
}

// look up screen for Jasa Medis -Group Tarif Filtered-
function ShowDialogJasaMedisByGroup(ctrl,sid)
{
	_sd(urlbJasaMedisByGroup+'?kds='+sid,ctrl);
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

// look up screen for Master Jasa Medik
//function ShowDialogJasaMedik(ctrl)
//{
//	_sd(urlbjasamedik, ctrl);	
//}
function ShowDialogJasaMedik(ctrl, sid)
{
	_sd(urlbjasamedik+'?kgj='+sid, ctrl);	
}



// look up screen for Master Pasien
function ShowDialogPasien(ctrl)
{
	_sd(urlbpasien, ctrl);	
}

// look up screen for Master Member
function ShowDialogMember(ctrl)
{
	_sd(urlbmember, ctrl);	
}

// look up screen for Master Instansi
function ShowDialogInstansi(ctrl)
{
	_sd(urlbinstansi, ctrl);
}

// look up screen for Master Tarif - Group
function ShowDialogTarifGroup(ctrl)
{
	_sd(urlbtarifgroup, ctrl);
}

// look up screen for Master Tarif - Pelayanan
function ShowDialogTarifItem(ctrl)
{
	_sd(urlbtarifitem, ctrl);
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

// look up screen for Matrix Pelayanan - Poliklinik
function ShowDialogMtxItemPoli(ctrl,sid)
{
	_sd(urlbmtxitempoli+'?kds='+sid,ctrl);
}

// look up screen for Appointment
function ShowDialogAppointment(ctrl)
{
	_sd(urlbappointment, ctrl);
}

// look up screen for Registrasi
function ShowDialogRegistrasi(ctrl)
{
	_sd(urlbregistrasi, ctrl);
}

// look up screen for Pembayaran
function ShowDialogPembayaran(ctrl)
{
	_sd(urlbpembayaran, ctrl);
}

// look up screen for Pembayaran
function ShowDialogGroupJasaMedis(ctrl)
{
	_sd(urlbGrpJasaMedis, ctrl);
}

// look up screen for Jenis Member
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
}

// look up screen for Paket Member
function ShowDialogPaketMember(ctrl)
{
	_sd(urlbpaketmember, ctrl);
}

// look up screen for Registrasi Rekalkulasi
function ShowDialogRegistrasiRekal(ctrl)
{
	_sd(urlbregistrasirekal, ctrl);
}

// look up screen for Master Cuti Dokter
function ShowDialogCutiDokter(ctrl)
{
	_sd(urlbcutidokter, ctrl);
}

// look up screen for Proses Piutang Instansi
function ShowDialogPiutangIns(ctrl)
{
	_sd(urlbpiutangins, ctrl);
}

// look up screen for Proses Piutang Pribadi
function ShowDialogPiutangPbd(ctrl)
{
	_sd(urlbpiutangpbd, ctrl);
}

// look up screen for Instansi yang masih Piutang
function ShowDialogInsPiutang(ctrl)
{
	_sd(urlbinspiutang, ctrl);
}

// look up screen for Pribadi yang masih Piutang
function ShowDialogPbdPiutang(ctrl)
{
	_sd(urlbpbdpiutang, ctrl);
}

// look up screen for Bayar Piutang Instansi
function ShowDialogByrPiutangIns(ctrl)
{
	_sd(urlbbyrpiutangins, ctrl);
}

// look up screen for Bayar Piutang Pribadi
function ShowDialogByrPiutangPbd(ctrl)
{
	_sd(urlbbyrpiutangpbd, ctrl);
}

// look up screen for Piutang Instansi yang masih Outstanding
function ShowDialogInsOutstanding(ctrl)
{
	_sd(urlbinsoutstanding, ctrl);
}

// look up screen for Piutang Pribadi yang masih Outstanding
function ShowDialogPbdOutstanding(ctrl)
{
	_sd(urlbpbdoutstanding, ctrl);
}

// look up screen for Header Standard Field
function ShowDialogStdField(ctrl)
{
	_sd(urlbstdfield, ctrl);
}

// look up screen for Registrasi MCU
function ShowDialogRegistrasiMCU2(ctrl)
{
	_sd(urlbregistrasimcu2, ctrl);
}

// look up screen for No. Bukti Registrasi MCU
function ShowDialogRegistrasiMCU(ctrl)
{
	_sd(urlbregistrasimcu, ctrl);
}

// look up screen for Paket MCU
function ShowDialogPaketMCU(ctrl)
{
	_sd(urlbpaketmcu, ctrl);
}

// look up screen for Paket MCU Perusahaan
function ShowDialogPaketMCUPrsh(ctrl,sid)
{
	_sd(urlbpaketmcuprsh+'?kds='+sid,ctrl);
}

// look up screen for Master Tarif - Group MCU Perusahaan
function ShowDialogTarifMCUPrsh(ctrl)
{
	_sd(urlbtarifmcuprsh, ctrl);
}

// look up screen for Master Item
function ShowDialogItemObat(ctrl)
{
	_sd(urlbitem, ctrl);
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

// look up screen for Member - Registrasi
function ShowDialogMemberRegistrasi(ctrl)
{
	_sd(urlbmemberreg, ctrl);
}

// look up screen for Pasien - Aktif
function ShowDialogPasienAktif(ctrl)
{
	_sd(urlbpasienaktif, ctrl);
}

// look up screen for Pengirim
function ShowDialogPengirim(ctrl,sid)
{
	_sd(urlbpengirim+'?kds='+sid,ctrl);
}

// look up screen for Pembayaran - Registrasi
function ShowDialogPembayaranRegistrasi(ctrl)
{
	_sd(urlbbayarreg, ctrl);
}

// look up screen for Open - Registrasi
function ShowDialogRegistrasiOpen(ctrl)
{
	_sd(urlbopenreg, ctrl);
}

// look up screen for User Accounts
function ShowDialogUserAccounts(ctrl)
{
	_sd(urlbuseraccounts, ctrl);
}

// look up screen for No Bukti Transaksi Paket
function ShowDialogNoBuktiTransPaket(ctrl)
{
	_sd(urlbnobuktitranspaket, ctrl);
}

// look up screen for No Bukti Transaksi Paket By NoRM and KdPoli
function ShowDialogNoBuktiTransPaket2(ctrl,nid,pid)
{
	_sd(urlbnobuktitranspaket2+'?norm='+nid+'&poli='+pid,ctrl)
}

// look up screen for Close - Registrasi
function ShowDialogRegistrasiClose(ctrl)
{
	_sd(urlbclosereg, ctrl);
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

// look up screen for Tindak Lanjut
function ShowDialogTdkLanjut(ctrl)
{
	_sd(urlbtdklanjut, ctrl);
}

function ShowDialogPembJM(ctrl)
{
	_sd(urlbpembjm, ctrl);
}

function ShowDialogMorfologi(ctrl)
{
	_sd(urlbmorfologi, ctrl);
}

// look up screen for Matrix Diagnosa - Poliklinik
function ShowDialogMtxDiagPoli(ctrl,sid)
{
	_sd(urlbmtxdiagpoli+'?kds='+sid,ctrl);
}

function ShowDialogGudang(ctrl)
{
	_sd(urlbgudang, ctrl);
}


function ShowDialogRegPerNorm(ctrl,sid)
{
	_sd(urlbregpernorm+'?kds='+sid,ctrl);
}

//show dialog for diagnosa & tindakan
function ShowDialogTransHDPerNoreg(ctrl,sid)
{
	_sd(urlbtranshdpernoreg+'?kds='+sid,ctrl);
}

function ShowDialogTindakan(ctrl)
{
	_sd(urlbtindakan, ctrl);
}

function ShowDialogDokterAns(ctrl)
{
	_sd(urlbdokterans, ctrl);
}

function ShowDialogRegMCUMassal(ctrl)
{
	_sd(urlbregmcumassal, ctrl);
}

// look up screen for Registrasi Hasil MCU Instansi
function ShowDialogRegistrasiHasilMCUIns(ctrl)
{
	_sd(urlbregistrasihasilmcuins, ctrl);
}

// look up screen for Hasil MCU Instansi
function ShowDialogHasilMCUIns(ctrl)
{
	_sd(urlbhasilmcuins, ctrl);
}

// Obat penunjang medis
function showDialogObatPnj(ctrl,kdr)
{
	_sd(urlbObatpnj+'?kdr='+kdr, ctrl);
}

// Matriks Pelayanan Penunjang Medis
function showDialogMatriksPelayananPnjMedis(ctrl,kdr)
{
	_sd(urlbMatriksPelayananPnjMedis+'?kdr='+kdr, ctrl);
}

// Obat poliklinik
function showDialogObatPoli(ctrl,kdr)
{
	_sd(urlbObatpoli+'?kdr='+kdr, ctrl);
}

// look up screen for Master Poliklinik Aktif
function ShowDialogPoliklinikAktif(ctrl)
{
	_sd(urlbpoliklinikaktif, ctrl);
}

// look up screen for Instansi yang masih Piutang u/ write off
function ShowDialogInsPiutangWriteOff(ctrl)
{
	_sd(urlbinspiutangwriteoff, ctrl);
}

// look up screen for Pribadi yang masih Piutang u/ write off
function ShowDialogPbdPiutangWriteOff(ctrl)
{
	_sd(urlbpbdpiutangwriteoff, ctrl);
}

// look up screen for Registrasi Hasil MCU
function ShowDialogRegistrasiHasilMCU2(ctrl)
{
	_sd(urlbregistrasihasilmcu2, ctrl);
}

// look up screen for Hasil MCU
function ShowDialogHasilMCU2(ctrl)
{
	_sd(urlbhasilmcu2, ctrl);
}

// look up screen for No Bukti Transaksi Paket By NoRM and kdpenunjang
function ShowDialogPaketTindakanRJMTX(ctrl,norm,kdpmedis)
{
	_sd(urlbpakettindakanrjmtx+'?norm='+norm+'&kdpmedis='+kdpmedis,ctrl)
}

// look up screen for Registrasi
function ShowDialogMedisByPoli(ctrl,kdr)
{
	_sd(urlbMedisByPoli+'?kdr='+kdr, ctrl);
}

// look up screen for Dokter Pengirim
function showDialogDokterPengirim(ctrl)
{
	_sd(urlbDokterPengirim, ctrl);
}

// look up screen for Registrasi
function ShowDialogRegistrasiKB(ctrl)
{
	_sd(urlbregistrasikb, ctrl);
}

// look up screen for Registrasi Penunjang Medis
function ShowDialogRegistrasiPnjMedis(ctrl)
{
	_sd(urlbregistrasipnjmedis, ctrl);
}

// Transaksi Header
function ShowDialogPoliklinikTrHD(ctrl,kdr)
{
	_sd(urlbPoliklinikTrHD+'?kdr='+kdr, ctrl);
}

// look up screen for Master Penunjang Medis
function ShowDialogPnjMedis(ctrl)
{
	_sd(urlbPnjMedis, ctrl);
}

// look up screen for Jasa Medis All
function ShowDialogJasaMedisAll(ctrl)
{
	_sd(urlbJasaMedisAll, ctrl);
}

// look up screen for Automatic Poliklinik List By Dokter
//function ShowDialogAutoPoliklinik(ctrl, kpol)
//{
//	_sd(urlbOtoPoliklinik+'?kpol='+kpol, ctrl);
//}

// look up screen for Dokter List By Poli
function ShowDialogDokterPoli(ctrl, kpol)
{
	_sd(urlbDokterByPoli+'?kpol='+kpol, ctrl);
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

// *********************************************************************************
// *                                                                               *
// *    (c) Copyright 1997-2003 QPro Sukses Mandiri, Pt.  All rights reserved.     *
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

// look up screen for Status Lokasi
// OMC
var urlbbank='/rs_/search/s001.htm'; //bank
var urlbkodepos='/rs_/search/s002.htm'; //kode pos
var urlbpoliklinik='/rs_/search/s003.htm'; //poliklinik
var urlbinstansi='/rs_/search/s004.htm'; //instansi
var urlbmedis='/rs_/search/s005.htm'; //medis
var urlbgudang='/rs_/search/s005.htm'; //gudang
var urlbruang='/rs_/search/s005.htm'; //ruang perawatan
var urlbpnjmedis='/rs_/search/s005.htm'; //penunjang medis

//
var urlbsmf='/rs_/search/s003.htm'; //smf
var urlbdtd='/rs_/search/s004.htm'; //dtd
var urlbdiagnosa='/rs_/search/s005.htm'; //diagnosa
var urlbjasamedik='/rs_/search/s006.htm'; //jasa medik - detil
var urlbpasien='/rs_/search/s007.htm'; //pasien
var urlbmember='/rs_/search/s008.htm'; //member

var urlbtarifgroup='/rs_/search/s010.htm'; //tarif - group
var urlbtarifitem='/rs_/search/s011.htm'; //tarif - pelayanan


var urlbmtxitempoli='/rs_/search/s014.htm'; //mtx pelayanan - poli
var urlbappointment='/rs_/search/s015.htm'; //appointment
var urlbregistrasi='/rs_/search/s016.htm'; //registrasi
var urlbpembayaran='/rs_/search/s017.htm'; //pembayaran
var urlbjasamedikgroup='/rs_/search/s018.htm'; //jasa medik - group
var urlbdokter='/rs_/search/s019.htm'; //dokter rawat jalan yang aktif
var urlbpaketmember='/rs_/search/s020.htm'; //paket member
var urlbregistrasirekal='/rs_/search/s021.htm'; //registrasi untuk rekalkulasi
var urlbcutidokter='/rs_/search/s022.htm'; //no. bukti untuk cuti dokter
var urlbpiutangins='/rs_/search/s023.htm'; //no. Invoice untuk piutang instansi
var urlbpiutangpbd='/rs_/search/s024.htm'; //no. Invoice untuk piutang pribadi
var urlbinspiutang='/rs_/search/s025.htm'; //instansi yang masih piutang
var urlbpbdpiutang='/rs_/search/s026.htm'; //pribadi yang masih piutang
var urlbbyrpiutangins='/rs_/search/s027.htm'; //no. Bayar untuk piutang instansi
var urlbbyrpiutangpbd='/rs_/search/s028.htm'; //no. Bayar untuk piutang pribadi
var urlbinsoutstanding='/rs_/search/s029.htm'; //instansi yang masih outstanding
var urlbpbdoutstanding='/rs_/search/s030.htm'; //pribadi yang masih outstanding
var urlbstdfield='/rs_/search/s031.htm'; //header standard field
var urlbregistrasimcu2='/rs_/search/s032.htm'; //registrasi untuk mcu
var urlbregistrasimcu='/rs_/search/s033.htm'; //no. bukti untuk registrasi mcu
var urlbpaketmcu='/rs_/search/s034.htm'; //paket mcu untuk pasien umum
var urlbpaketmcuprsh='/rs_/search/s035.htm'; //paket mcu untuk pasien perusahaan kontrak
var urlbtarifmcuprsh='/rs_/search/s036.htm'; //tarif - mcu perusahaan
var urlbitem='/rs_/search/s037.htm'; //inventory item
var urlbregistrasihasilmcu='/rs_/search/s038.htm'; //registrasi untuk hasil mcu
var urlbhasilmcu='/rs_/search/s039.htm'; //hasil mcu
var urlbmemberreg='/rs_/search/s040.htm'; //member untuk form registrasi
var urlbpasienaktif='/rs_/search/s041.htm'; //pasien yang aktif
var urlbpengirim='/rs_/search/s042.htm'; //pengirim 
var urlbbayarreg='/rs_/search/s043.htm'; //registrasi untuk pembayaran
var urlbopenreg='/rs_/search/s044.htm'; //registrasi untuk open
var urlbuseraccounts='/rs_/search/s045.htm'; //user accounts
var urlbnobuktitranspaket='/rs_/search/s046.htm'; //no. bukti untuk transaksi paket
var urlbnobuktitranspaket2='/rs_/search/s047.htm'; //no. bukti untuk transaksi paket per norm dan kdpoli
var urlbclosereg='/rs_/search/s048.htm'; //registrasi untuk close
var urlbkdnkeluar='/rs_/search/s049.htm'; //keadaan keluar
var urlbcarakeluar='/rs_/search/s050.htm'; //cara keluar
var urlbtdklanjut='/rs_/search/s051.htm'; //tindak lanjut
var urlbpembjm='/rs_/search/s052.htm';
var urlbmorfologi='/rs_/search/s053.htm'; // master morfologi
var urlbmtxdiagpoli='/rs_/search/s054.htm'; //mtx diagnosa - poli
var urlbgudang='/rs_/search/s055.htm'; //gudang
var urlbregpernorm='/rs_/search/s056.htm'; //registrasi per norm
var urlbtranshdpernoreg='/rs_/search/s057.htm'; //trans header per noreg
var urlbtindakan='/rs_/search/s058.htm'; //master tindakan
var urlbdokterans='/rs_/search/s059.htm'; //dokter anestesi
var urlbregmcumassal='/rs_/search/s060.htm'; //registrasi mcu massal
var	urlbpelayananri='/rs_/search/s061.htm'; //pelayanan ri
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

// look up screen for Master Jasa Medik
function ShowDialogJasaMedik(ctrl)
{
	_sd(urlbjasamedik, ctrl);	
}
function ShowDialogPelayananRi(ctrl)
{
	_sd(urlbpelayananri, ctrl);
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
function ShowDialogJasaMedikGroup(ctrl)
{
	_sd(urlbjasamedikgroup, ctrl);
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

// look up screen for Piutang Instansi
function ShowDialogPiutangIns(ctrl)
{
	_sd(urlbpiutangins, ctrl);
}

// look up screen for Piutang Pribadi
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
			
function ShowDialogRegPerNorm(ctrl,sid)
{
	_sd(urlbregpernorm+'?kds='+sid,ctrl);
}

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


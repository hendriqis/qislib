//=====================================================
// D I A L O G   F U N C T I O N
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

function ShowDialogRegistrasiRI(ctrl)
{
	_sd(urlbRegistrasiRI, ctrl);
}
function ShowDialogRegistrasiRD(ctrl)
{
	_sd(urlbregistrasiRD, ctrl);	
}
function ShowDialogTransaksiLB(ctrl)
{
	_sd(urlbtransaksipnj, ctrl);
}
function ShowDialogRegistrasiRJ(ctrl)
{
	_sd(urlbregistrasiRJ, ctrl);
}
function ShowDialogRegistrasiMCU(ctrl)
{
	_sd(urlbregistrasimcu, ctrl);
}
function ShowDialogTransPnj(ctrl,kdr)
{
	_sd(urlbTransPnj+'?kdr='+kdr, ctrl);
}



// look up screen for instansi of piutang instansi non operasional
function ShowDialogByrPiutangInsCustNon(ctrl)
{
	_sd(urlbbyrpiutanginscustnon, ctrl);
}

function ShowDialogPiutangInsCustNon(ctrl)
{
	_sd(urlbpiutanginscustnon, ctrl);
}
//--------------------------
function ShowDialogKodeCoa(ctrl)
{
	_sd(urlbKodeCoa, ctrl);
}

// look up screen for Master Bank aktif
function ShowDialogBankAktif(ctrl)
{
	_sd(urlbbankaktif, ctrl);
}


// look up screen for kode test lab
function ShowDialogkdtest(ctrl)
{
	_sd(urlbkdtest, ctrl);
}

// look up screen for test group
function ShowDialogTestGroup(ctrl)
{
	_sd(urlbTestgroup, ctrl);
}

function ShowDialogUser(ctrl)
{
	_sd(urlbuser, ctrl);
}

// look up screen for Buku Treasury
function ShowDialogBukuTreasury(ctrl)
{
	_sd(urlbBukuTreasury, ctrl);
}

// NoVoucher Treasury Berdasarkan Kode Buku
function showDialogNoVoucherByKdBuku(ctrl,kdbuku)
{
	_sd(urlbVoucherByKdBuku+'?kdbuku='+kdbuku, ctrl);
}

// NoVoucher Treasury Berdasarkan Kode Buku Proses
function showDialogNoVoucherByKdBukuProses(ctrl,kdbuku)
{
	_sd(urlbVoucherByKdBukuProses+'?kdbuku='+kdbuku, ctrl);
}

// NoVoucher Treasury Berdasarkan Kode Buku Proses Approved
function showDialogNoVoucherByKdBukuProsesApproved(ctrl,kdbuku)
{
	_sd(urlbVoucherByKdBukuProsesApproved+'?kdbuku='+kdbuku, ctrl);
}

// NoVoucher Treasury Berdasarkan Kode Buku
function showDialogKdCOAByKdBuku(ctrl,kdbuku)
{
	_sd(urlbKdCOAByKdBuku+'?kdbuku='+kdbuku, ctrl);
}

// SubLedger Berdasarkan Group
function showDialogSubLedgerByGroup(ctrl,kdgroup)
{
	_sd(urlbSubLedgerByGroup+'?kdgroup='+kdgroup, ctrl);
}

// look up screen for COA Detail
function showDialogNopekDetil(ctrl)
{
	_sd(urlbNopekDetil, ctrl);
}

//look up screen for NoTransaksi Uang Titipan
function ShowDialogNoTransaksiUangTitipan(ctrl,sid)
{
	_sd(urlbnotransuangtitipan+'?norm='+sid,ctrl);
}

// look up screen for Group Ruang Rawat
function ShowDialogGroupRuang(ctrl)
{
	_sd(urlbruanggroup, ctrl);
}

// look up screen for Piutang Non Operasional
function ShowDialogWriteOffPiutangNonOpr(ctrl)
{
	_sd(urlbwriteoffpiutangnonopr, ctrl);
}

function ShowDialogByrPiutangNonOprByNoTrans(ctrl)
{
	_sd(urlbByrPiutangNonOprByNoTrans, ctrl);
}

function ShowDialogPiutangNonOprByInvoice(ctrl)
{
	_sd(urlbPiutangNonOprByNoInvoice, ctrl);
}

function ShowDialogPiutangNonOprCust(ctrl)
{
	_sd(urlbPiutangNonOprCust, ctrl);
}

function ShowDialogTransPiutangNonOperasional(ctrl)
{
	_sd(urlbTransPiutangNonOperasional, ctrl);
}

function ShowDialogPiutangNonOperasionalAktif(ctrl)
{
	_sd(urlbPiutangNonOperasionalAktif, ctrl);
}

function ShowDialogPiutangNonOperasional(ctrl)
{
	_sd(urlbPiutangNonOperasional, ctrl);
}

function ShowDialogPiutangInstansi(ctrl,kdi) //abell
{
	_sd(urlbPiutangInstansi+'?kdi='+kdi, ctrl);
}

// look up screen for Buku Fixed Asset
function showDialogKelompokFa(ctrl)
{
	_sd(urlbKelompokFA, ctrl);
}

function ShowDialogRegPerNorm(ctrl,sid)
{
	_sd(urlbregpernorm+'?kds='+sid,ctrl);
}

function ShowDialogRegPerNormRJ(ctrl,sid)
{
	_sd(urlbregpernormRJ+'?kds='+sid,ctrl);
}

function ShowDialogRegPerNormRD(ctrl,sid)
{
	_sd(urlbregpernormRD+'?kds='+sid,ctrl);
}

function ShowDialogTransaksiPnj(ctrl)
{
	_sd(urlbtransaksipnj, ctrl);
}

function showDialogRegistrasiMCU(ctrl)
{
	_sd(urlbregistrasimcu, ctrl);
}

function showDialogRegistrasiMD(ctrl)
{
	_sd(urlbregistrasimd, ctrl);
}

// look up screen for Pembayaran Jasa Medis
function ShowDialogPembayaranJasaMedis(ctrl,modul)
{
	_sd(urlbPembayaranJasaMedis+'?modul='+modul, ctrl);
}


// look up screen for Tukar Faktur Cabang
function ShowDialogFakturCab(ctrl)
{
	_sd(urlbfakturcab, ctrl);
}

// look up screen for Verifikasi Jasa Medis RJ
function ShowDialogPembJMNew(ctrl)
{
	_sd(urlbpembjasamedisnew, ctrl);
}

// look up screen for Verifikasi Jasa Medis RI
function ShowDialogPembJMRINew(ctrl)
{
	_sd(urlbpembjasamedisrinew, ctrl);
}

// look up screen for Verifikasi Jasa Medis RD
function ShowDialogPembJMRDNew(ctrl)
{
	_sd(urlbpembjasamedisrdnew, ctrl);
}

// look up screen for Verifikasi Jasa Medis MD
function ShowDialogPembJMMDNew(ctrl)
{
	_sd(urlbpembjasamedismdnew, ctrl);
}

// look up screen for Master Group Poliklinik
function ShowDialogGroupPoliklinik(ctrl)
{
	_sd(urlbGroupPoliklinik, ctrl);
}

// look up screen for Master Inventory Item lOGISTIK
function ShowDialogItemAll(ctrl)
{
	retVal=_sd(urlbItemAll, ctrl);
}

// look up screen for Paket MCU
function ShowDialogPemeriksaanMCU(ctrl)
{
	_sd(urlbpemeriksaanmcu, ctrl);
}

// look up screen for tarif group
function ShowDialogTarifGroup(ctrl)
{
	_sd(urlbtarifgroup, ctrl);
}

// look up screen for tarif pelayanan
function ShowDialogTarifPelayanan(ctrl)
{
	_sd(urlbtarifpelayanan, ctrl);
}

// look up screen for tarif pelayanan aktif
function ShowDialogTarifPelayananAktif(ctrl)
{
	_sd(urlbtarifpelayananaktif, ctrl);
}

// look up screen for Jasa Group
function ShowDialogJasaGroup(ctrl)
{
	_sd(urlbjasagroup, ctrl);
}

// look up screen for Master Jasa Medik
function ShowDialogJasaMedik(ctrl)
{
	_sd(urlbjasamedik, ctrl);
}

// look up screen for Kelas
function ShowDialogKelas(ctrl)
{
	_sd(urlbkelas, ctrl);
}	

// look up screen for kelas aktif
function ShowDialogKelasAktif(ctrl)
{
	_sd(urlbkelasaktif, ctrl);
}

// look up screen for Item Farmasi
function ShowDialogObat(ctrl)
{
	_sd(urlbobat, ctrl);
}	

// look up screen for Master Instansi
function ShowDialogInstansi(ctrl)
{
	_sd(urlbinstansi, ctrl);
}

// look up screen for Pelayanan Laboratorium
function ShowDialogPemeriksaanLb(ctrl)
{
	_sd(urlbpemeriksaanlb, ctrl);
}

// look up screen for Plafon Instansi
function ShowDialogPlafon(ctrl,nid,pid)
{
	_sd(urlbplafon+'?nid='+nid+'&pid='+pid,ctrl)
}

// look up screen for Master Medis
function ShowDialogMedis(ctrl)
{
	_sd(urlbmedis, ctrl);
}

// look up screen for Master Medis Rawat Jalan
function ShowDialogMedisRJ(ctrl)
{
	_sd(urlbmedisrj, ctrl);
}

// look up screen for Master Medis Rawat Inap
function ShowDialogMedisRI(ctrl)
{
	_sd(urlbmedisri, ctrl);
}

// look up screen for Master Medis Rawat Jalan
function ShowDialogMedisRD(ctrl)
{
	_sd(urlbmedisrd, ctrl);
}

// look up screen for Master Medis JM
function ShowDialogMedisJM(ctrl)
{
	_sd(urlbmedisjm, ctrl);
}

// look up screen for Master Kode Pos
function ShowDialogKodePos(ctrl)
{
	_sd(urlbkodepos, ctrl);
}

// look up screen for Master SMF
function ShowDialogSMF(ctrl)
{
	_sd(urlbsmf, ctrl);
}

// look up screen for Master Poliklinik
function ShowDialogPoliklinik(ctrl)
{
	_sd(urlbpoliklinik, ctrl);
}

// look up screen for Master Poliklinik Aktif
function ShowDialogPoliAktif(ctrl)
{
	_sd(urlbpoliaktif, ctrl);
}

// look up screen for Master Bank
function ShowDialogBank(ctrl)
{
	_sd(urlbbank, ctrl);
}

// look up screen for Nomor Bukti Cuti Dokter
function ShowDialogCutiDokter(ctrl)
{
	_sd(urlbcutidokter, ctrl);
}

// look up screen for Master Diagnosa
function ShowDialogDiagnosa(ctrl)
{
	_sd(urlbdiagnosa, ctrl);	
}

// look up screen for Master DTD
function ShowDialogDTD(ctrl)
{
	_sd(urlbdtd, ctrl);
}

// member
function ShowDialogMember(ctrl)
{
	_sd(urlbmember, ctrl);
}

// look up screen for rekam medis
function ShowDialogRekamMedis(ctrl)
{
	_sd(urlbrekammedis, ctrl);
}

// look up screen for Paket Member
function ShowDialogPaketMember(ctrl)
{
	_sd(urlbpaketmember, ctrl);
}

// look up screen for Morfologi
function ShowDialogMorfologi(ctrl)
{
	_sd(urlbmorfologi, ctrl);
}

// look up screen for Penunjang Medis
function ShowDialogPnjMedis(ctrl)
{
	_sd(urlbpnjmedis, ctrl);
}	

// look up screen for Gudang Farmasi
function ShowDialogGudang(ctrl)
{
	_sd(urlbgudang, ctrl);
}

// look up screen for Gudang Logistik
function ShowDialogGudangLog(ctrl)
{
	_sd(urlbgudanglog, ctrl);
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

// look up screen for Ruang Perawatan
function ShowDialogRuang(ctrl)
{
	_sd(urlbruang, ctrl);
}

// look up screen for Master Tindakan
function ShowDialogTindakan(ctrl)
{
	_sd(urlbtindakan, ctrl);
}

// look up screen for proses piutang instansi - no invoice
function ShowDialogPiutangIns(ctrl)
{
	_sd(urlbpiutangins, ctrl);
}

// look up screen for Pengirim
function ShowDialogPengirim(ctrl)
{
	_sd(urlbpengirim, ctrl);
}

function ShowDialogDokterJasaMedis(ctrl)
{
	_sd(urlbdokterjasamedis, ctrl);
}

function ShowDialogPembJM(ctrl)
{
	_sd(urlbpembjasamedis, ctrl)
}

function ShowDialogPembJMRI(ctrl)
{
	_sd(urlbpembjasamedisri, ctrl)
}

// look up screen for Pembayaran Jasa Medis RD
function ShowDialogPembJMRD(ctrl)
{
	_sd(urlbpembjasamedisrd, ctrl);
}

// look up screen for Pembayaran Jasa Medis MD
function ShowDialogPembJMMD(ctrl)
{
	_sd(urlbpembjasamedismd, ctrl);
}

// look up screen for Pembayaran Jasa Medis MCU
function ShowDialogPembJMMCU(ctrl)
{
	_sd(urlbpembjasamedismcu, ctrl);
}

// look up screen for pembayaran piutang instansi - no transaksi
function ShowDialogByrPiutangIns(ctrl)
{
	_sd(urlbbyrpiutangins, ctrl);
}

// look up screen for pembayaran piutang instansi - instansi
function ShowDialogByrPiutangInsCust(ctrl)
{
	_sd(urlbbyrpiutanginscust, ctrl);
}

// look up screen for pembayaran piutang pribadi - no transaksi
function ShowDialogByrPiutangPbd(ctrl)
{
	_sd(urlbbyrpiutangpbd, ctrl);
}

// look up screen for pembayaran piutang pribadi - norm
function ShowDialogByrPiutangPbdCust(ctrl)
{
	_sd(urlbbyrpiutangpbdcust, ctrl);
}

// look up screen for proses piutang instansi - instansi
function ShowDialogPiutangInsCust(ctrl)
{
	_sd(urlbpiutanginscust, ctrl);
}

// look up screen for proses piutang pribadi - no invoice
function ShowDialogPiutangPbd(ctrl)
{
	_sd(urlbpiutangpbd, ctrl);
}

// look up screen for proses piutang pribadi - norm
function ShowDialogPiutangPbdCust(ctrl)
{
	_sd(urlbpiutangpbdcust, ctrl);
}
// look up screen for writeoff piutang instansi - instansi
function ShowDialogWriteOffPiutangIns(ctrl)
{
	_sd(urlbwriteoffpiutangins, ctrl);
}

// look up screen for writeoff piutang pribadi - norm
function ShowDialogWriteOffPiutangPbd(ctrl)
{
	_sd(urlbwriteoffpiutangpbd, ctrl);
}

// look up screen for User Accounts
function ShowDialogUserAccounts(ctrl)
{
	_sd(urlbuseraccounts, ctrl);
}

// look up screen for Header Standard Field
function ShowDialogStdField(ctrl)
{
	_sd(urlbstdfieldhd, ctrl);
}

// look up screen for Tempat Tidur By Number
function ShowDialogTempatTidur(ctrl)
{
	_sd(urlbtempattidur, ctrl);
} 

// look up screen for Supplier
function ShowDialogSupplier(ctrl)
{
	_sd(urlbsupplier, ctrl);
} 

// look up screen for Header Standard report
function ShowDialogStdReport(ctrl)
{
	_sd(urlbstdreporthd, ctrl);
}

// look up screen for Customer
function ShowDialogCustomer(ctrl)
{
	_sd(urlbcustomer, ctrl);
} 

// look up screen for Tukar Faktur
function ShowDialogVoucherFaktur(ctrl)
{
	_sd(urlbvoucherfaktur, ctrl);
}

// look up screen for Pembayaran Hutang
function ShowDialogPembayaranHutang(ctrl)
{
	_sd(urlbpembayaranhutang, ctrl);
}

// look up screen for Master Pasien
function ShowDialogPasien(ctrl)
{
	_sd(urlbpasien, ctrl);	
}

// look up screen for Penunjang Medis
function ShowDialogPnjMedis(ctrl)
{
	_sd(urlbpnjmedis, ctrl);
}	

// look-up screen.... registrasi by kdtype and norm 
function showDialogRegistrasi(ctrl,norm,kdtype)
{
	_sd(urlbREGByNormNType+'?norm='+norm+'&kdtype='+kdtype, ctrl);
}

// look-up screen.... no transaksi by Noreg,Norm,kdtype,status
function ShowDialogNoTransaksiRM(ctrl,noreg,norm,kdtype,kdstatus)
{
	_sd(urlbTrMedRecBYREGNORMTYPENSTATUS+'?noreg='+noreg+'&norm='+norm+'&kdtype='+kdtype+'&kdstatus='+kdstatus, ctrl);
}

// look up screen for pembayaran transaksi penjualan ke rs
function ShowDialogPembyPenjC(ctrl)
{
	_sd(urlbpembayaranpenjualanc, ctrl);
}

// look up screen for pembayaran transaksi penjualan ke rs
function ShowDialogPembyPenjC_LG(ctrl)
{
	_sd(urlbpembayaranpenjualanc_lg, ctrl);
}

// look up screen for Pesanan by Supplier
function ShowDialogPenjualanCByCustomer(ctrl,kdc)
{
	_sd(urlbpenjualancbycustomer+'?kdc='+kdc,ctrl)
}

// look up screen for Pesanan by Supplier
function ShowDialogPenjualanCByCustomer_LG(ctrl,kdc)
{
	_sd(urlbpenjualancbycustomer_lg+'?kdc='+kdc,ctrl)
}

// look up screen for potongan jasa medis
function ShowDialogPotJM(ctrl)
{
	_sd(urlbpotjm, ctrl);
}

// look up screen for pembayaran Jasa Medis 
function ShowDialogByrJM(ctrl)
{
	_sd(urlbbyrjm, ctrl);
}

// look up screen for anggota instansi
function ShowDialogNoAnggota(ctrl)
{
	_sd(urlbanggotainst, ctrl);
}
function ShowDialogNoAnggota(ctrl,kdNI)
{
	_sd(urlbanggotainst+'?kdNI='+kdNI, ctrl);
}

function ShowDialogNoMembership(ctrl,kdNI)
{
	_sd(urlbanggotainstnomember+'?kdNI='+kdNI, ctrl);
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
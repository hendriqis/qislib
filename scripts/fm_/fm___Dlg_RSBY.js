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

// look up screen for Status Lokasi

function ShowDialogStLokasi(ctrl)
{
	_sd(urlbstlok, ctrl);
}

// look up screen for Master Gudang
function ShowDialogGudangAll(ctrl)
{
	_sd(urlbgudangall, ctrl);
}

// look up screen for Gudang kalau disc tidak muncul
function ShowDialogGudang(ctrl)
{
	_sd(urlbgudang, ctrl);
}

// look up screen for Inventory Item kalau disc tidak muncul
function ShowDialogItem(ctrl)
{
	retVal=_sd(urlbitem, ctrl);
}

function ShowDialogMarkUpRuang(ctrl)
{
	_sd(urlbmarkupruang,ctrl);
}

// look up screen for Master Inventory Item
function ShowDialogItemAll(ctrl)
{
	retVal=_sd(urlbitemall, ctrl);
}

// look up screen for Master Poliklinik
function ShowDialogPoliklinik(ctrl)
{
	_sd(urlbpoliklinik, ctrl);
}

// look up screen for Line Item
function ShowDialogLineItem(ctrl)
{
	_sd(urlblnitm, ctrl);	
}

// look up screen for Pemesanan
function ShowDialogPemesanan(ctrl)
{
	_sd(urlbnopesan, ctrl);	
}

// look up screen for Permintaan
function ShowDialogPermintaanBarang(ctrl)
{
	_sd(urlbnominta, ctrl);	
}

// look up screen for Supplier kalau disct tidak muncul
function ShowDialogSupplier(ctrl)
{
	_sd(urlbsupplier, ctrl);	
}

// look up screen for Master Supplier
function ShowDialogSupplierAll(ctrl)
{
	_sd(urlbsupplierall, ctrl);	
}

// look up screen for master customer
function ShowDialogCustomerAll(ctrl)
{
	_sd(urlbcustomerall, ctrl);
}

// look up screen for Supplier PBF & Produsen
function ShowDialogSupplierSome(ctrl)
{
	_sd(urlbsuppliersome, ctrl);	
}

// look up screen for Supplier yang ada PO
function ShowDialogSupplierSp(ctrl)
{
	_sd(urlbsuppliersp, ctrl);	
}

// look up screen for Supplier PBF 
function ShowDialogSupplierPBF(ctrl)
{
	_sd(urlbsupplierpbf, ctrl);	
}

// look up screen for Supplier Produsen 
function ShowDialogSupplierProd(ctrl)
{
	_sd(urlbsupplierprod, ctrl);	
}

// look up screen for Supplier Untuk Credit Note
function ShowDialogSupplierCNote(ctrl)
{
	_sd(urlbsuppliercnote, ctrl);	
}

// look up screen for Supplier Untuk Retur Pembelian
function ShowDialogSupplierRPemb(ctrl)
{
	_sd(urlbsupplierrpemb, ctrl);	
}

// look up screen for Satuan
function ShowDialogSatuan(ctrl)
{
	_sd(urlbsatuan, ctrl);
}

// look up screen for Markup
function ShowDialogMarkUp(ctrl)
{
	_sd(urlbMarkup, ctrl);
}

// look up screen for Pesanan by Supplier
function sDlgBrgByKdS(ctrl,sid)
{
	_sd(urlbcounterpsn+'?kds='+sid,ctrl)
}

// look up screen for Penerimaan
function ShowDialogPenerimaan(ctrl)
{
	_sd(urlbpenerimaan, ctrl);
}

// look up screen for Pesanan
function ShowDialogPesanan(ctrl)
{
	_sd(urlbpesanan, ctrl);
}

// look up screen for Counter Pesanan
function ShowDialogCounterPsn(ctrl)
{
	_sd(urlbcounterpsn, ctrl);
}

// look up screen for Resep
function ShowDialogResep(ctrl)
{
	_sd(urlbresep, ctrl);
}

// look up screen for Registrasi
function ShowDialogRegistrasi(ctrl,stgl)
{
	_sd(urlbregistrasi+'?tgl='+stgl,ctrl);
}

// look up screen for Dokter
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
}

// look up screen for Distribusi
function ShowDialogDistribusi(ctrl)
{
	_sd(urlbdistribusi, ctrl);
}

// look up screen for Retur Pembelian
function ShowDialogReturPemb(ctrl)
{
	_sd(urlbnoreturpemb, ctrl);
}

function ShowDialogReturPByS(ctrl,sid)
{
	_sd(urlbnoreturbysup+'?kds='+sid,ctrl);
}

// look up screen for Counter Penerimaan Barang
function ShowDialogCounterTerima(ctrl,bid)
{
	_sd(urlbcounterterima+'?bpb='+bid,ctrl);
}

// look up screen for Penerimaan Setelah Posting
function ShowDialogPenerimaanPosting(ctrl,sid)
{
	_sd(urlbpenerimaanposting+'?kds='+sid,ctrl);
}

// look up screen for Stock Opname
function ShowDialogStockOpname(ctrl)
{
	_sd(urlbstockopname, ctrl);
}

// look up screen for Penyesuaian
function ShowDialogPenyesuaian(ctrl)
{
	_sd(urlbpenyesuaian, ctrl);
}

// look up screen for Nota Credit
function ShowDialogNotaCredit(ctrl)
{
	_sd(urlbnotacredit, ctrl);
}

// look up screen for Produksi
function ShowDialogProduksi(ctrl)
{
	_sd(urlbproduksi, ctrl);
}

// look up screen for Produksi
function ShowDialogVoucherFaktur(ctrl)
{
	_sd(urlbvoucherfaktur, ctrl);
}

// look up screen for Produksi
function ShowDialogVoucherFaktur(ctrl)
{
	_sd(urlbvoucherfaktur, ctrl);
}

// look up screen for Item By Gudang and Lokasi
function sDlgBrgByGL(ctrl,gid,lid)
{
	_sd(urlbstokitem+'?kdg='+gid+'&kdl='+lid,ctrl)
}

// look up screen for Item By Gudang, Lokasi And Expired
function sDlgBrgByGLE(ctrl,gid,lid,bid)
{
	_sd(urlbstokitemexp+'?kdg='+gid+'&kdl='+lid+'&kdb='+bid,ctrl)
}

// look up screen for Perusahaan
function ShowDialogPerusahaan(ctrl)
{
	_sd(urlbperusahaan, ctrl);
}

// look up screen for Pembelian Cash
function ShowDialogPembBebas(ctrl)
{
	_sd(urlbpembcash, ctrl);
}

// look up screen for Pembelian Cash
function ShowDialogReturRsp(ctrl)
{
	_sd(urlbreturrsp, ctrl);
}

// look up screen for Pembayaran Hutang
function ShowDialogPembHutang(ctrl)
{
	_sd(urlbayarhutang, ctrl);
}

// look up screen for Formula
function ShowDialogFormula(ctrl)
{
	_sd(urlbformula, ctrl);
}

// look up screen for Embalace
function ShowDialogEmbalace(ctrl)
{
	_sd(urlbembalace, ctrl);
}

// look up screen for Resep Bebas
function ShowDialogRspBebas(ctrl)
{
	_sd(urlbresepbebas, ctrl);
}

// look up screen for Obat Bebas
function ShowDialogObatBebas(ctrl)
{
	_sd(urlbobatbebas, ctrl);
}

// look up screen for Barang Jenis Embalace
function ShowDialogBarangEmbalace(ctrl)
{
	_sd(urlbbarangembl, ctrl);
}

// look up screen for Pemakaian Barang
function ShowDialogPemakaian(ctrl)
{
	_sd(urlbpemakaianbrg, ctrl);
}

// look up screen for Distribusi Purchasing menurut No. Penerimaan
function ShowDialogDsPurchase(ctrl,dsid)
{
	_sd(urlbdspurchase+'?kdds='+dsid,ctrl);
}

// look up screen for Penggantian Barang Retur
function ShowDialogGantiRetur(ctrl)
{
	_sd(urlbgantiretur, ctrl);
}

// look up screen for Item Retur Per NoRetur
function ShowDialogItemReturByNoRetur(ctrl,nort)
{
	_sd(urlbitemreturbynoretur+'?nort='+nort,ctrl);
}

// look up screen for Master MarkUp per Kelas
function ShowDialogMarkUpKelas(ctrl)
{
	_sd(urlbmarkupkelas,ctrl);
}

// look up screen for No. Resep RI Berdasarkan noreg
function ShowDialogResepRI(ctrl,stnoreg)
{
	_sd(urlbresepri+'?snoreg='+stnoreg,ctrl);
}

// look up screen for active substance (zat aktif)
function ShowDialogZatAktif(ctrl)
{
	_sd(urlzataktif, ctrl)
}

// look up screen for drug interaction (interaksi obat)
function ShowDialogDrugInt(ctrl)
{
	_sd(urldrgint, ctrl)
}
	
// look up screen for side effect (efek samping)
function ShowDialogSideEff(ctrl)
{
	_sd(urlsdeff, ctrl)
}

// look up screen for measure to take (tindakan yang perlu diambil)
function ShowDialogMeasure(ctrl)
{
	_sd(urlmsr, ctrl)
}

// look up screen for aturan pakai
function ShowDialogAturan(ctrl)
{
	_sd(urlatur, ctrl)
}

function ShowDialogKonversiItem(ctrl)
{
	
	_sd(urlkonvit, ctrl)
}

function ShowDialogResepAskes(ctrl)
{
	_sd(urlrspas, ctrl);
}

// look up screen for Pembelian Cash
function ShowDialogReturRspAskes(ctrl)
{
	_sd(urlreturrspas, ctrl);
}

function ShowDialogRspAskesRetur(ctrl)
{
	_sd(urlrspasretur, ctrl);
}

function ShowDialogResepTakaful(ctrl)
{
	_sd(urlrsptakaful, ctrl)
}

function ShowDialogItemAskes(ctrl,gid,lid)
{
	_sd(urlitemaskes+'?kdg='+gid+'&kdl='+lid,ctrl);
}

function ShowDialogItemTakaful(ctrl,gid,lid)
{
	_sd(urlitemtakaful+'?kdg='+gid+'&kdl='+lid,ctrl);
}

function ShowDialogIndikasi(ctrl)
{
	_sd(urlindikasi, ctrl)
}

function ShowDialogTherapi(ctrl)
{
	_sd(urltherapi, ctrl)
}

// look up screen for No. Resep RI Berdasarkan noreg
function ShowDialogTherapiDetail(ctrl)
{
	_sd(urltherapidet, ctrl);
}

function ShowDialogKelompokTherapi(ctrl)
{
	_sd(urlkelompok, ctrl);
}

function ShowDialogPermintaan(ctrl)
{
	_sd(urlpermintaan, ctrl)
}

// look up screen for Perusahaan Takaful
function ShowDialogInsTakaful(ctrl)
{
	_sd(urlbinstakaful, ctrl);
}

// look up screen for Retur Resep Rawat Inap
function ShowDialogReturRspRi(ctrl)
{
	_sd(urlbreturrspri, ctrl);
}

// look up screen for Retur Obat Bebas
function ShowDialogReturBebas(ctrl)
{
	_sd(urlbreturbebas, ctrl);
}

// look up screen for Resep Bebas
function ShowDialogRspBebasRetur(ctrl)
{
	_sd(urlbresepbebasretur, ctrl);
}

// look up screen for Penerimaan Konsinyasi
function ShowDialogTrKonsinyasi(ctrl)
{
	_sd(urlbtrkonsinyasi, ctrl);
}

// look up screen for Pengembalian Konsinyasi
function ShowDialogKembaliKonsinyasi(ctrl)
{
	_sd(urlbkonsinyasiback, ctrl);
}

// look up screen for Tukar Faktur Konsinyasi
function ShowDialogTFKonsinyasi(ctrl)
{
	_sd(urlbtfkonsinyasi, ctrl);
}

// look up screen for Retur Resep Takaful
function ShowDialogReturRspTakaful(ctrl)
{
	_sd(urlbreturrsptakaful, ctrl);
}

// look up screen for Resep Takaful
function ShowDialogRspTakafulRetur(ctrl)
{
	_sd(urlbrsptakafulretur, ctrl);
}

// look up screen for Pengiriman Barang
function ShowDialogPengiriman(ctrl)
{
	_sd(urlbpengirimanbrg, ctrl);
}


// look up screen for transaksi penjualan ke rs
function ShowDialogPenjC(ctrl)
{
	_sd(urlbpenjualanc, ctrl);
}

// look up screen for pembayaran transaksi penjualan ke rs
function ShowDialogPembyPenjC(ctrl)
{
	_sd(urlbpembayaranpenjualanc, ctrl);
}

// look up screen for Permintaan per Gudang
function ShowDialogPermintaan(ctrl,gid)
{
	_sd(urlpermintaanpg+'?kdg='+gid,ctrl)
}

// look up screen for Pesanan by Supplier
function ShowDialogPenjualanCByCustomer(ctrl,kdc)
{
	_sd(urlbpenjualancbycustomer+'?kdc='+kdc,ctrl)
}

// look up screen for Penerimaan
function ShowDialogPenerimaanUpdate(ctrl)
{
	_sd(urlbpenerimaanupdate, ctrl);
}

// look up screen for Supplier Berdasarkan Matrik Item
function ShowDialogSupplierMatrikItem(ctrl,sid)
{
	_sd(urlbsuppliermatrikitem+'?kds='+sid,ctrl);
}

// look up screen for Retur Penjualan BP
function ShowDialogReturPenjC(ctrl)
{
	_sd(urlbnoreturpenjc, ctrl);
}

// look up screen for Customer Untuk Retur Penjualan BP
function ShowDialogCustomerRPenjC(ctrl)
{
	_sd(urlbcustomerrpenjc, ctrl);	
}

// look up screen for Penjualan BP Setelah Posting
function ShowDialogPenjCPosting(ctrl,sid)
{
	_sd(urlbpenjcposting+'?kds='+sid,ctrl);
}

// look up screen for Counter Penjualan BP
function ShowDialogCounterPenjC(ctrl,bid)
{
	_sd(urlbcounterpenjc+'?bpb='+bid,ctrl);
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
function _sdSupplierropo(ctrl)
{
	var retval =
		window.showModalDialog(urlbsupplier,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
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

// per-cases function
function _sdSupplierMatriksItem(ctrl, kdbarang)
{	
	var retval =
		window.showModalDialog(urlbsuppliermatrikitem+'?kds='+kdbarang,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
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
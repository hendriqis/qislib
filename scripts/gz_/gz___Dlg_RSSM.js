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

//Sub Modul Logistik

function ShowDialogStLokasi(ctrl)
{
	_sd(urlbstlok, ctrl);
}

// look up screen for Master Gudang
function ShowDialogGudangAll(ctrl)
{
	_sd(urlbgudangall, ctrl);
}

// look up screen Diit Komplikasi
function ShowDialogDiitKomp(ctrl,kd)
{
	_sd(urlbDiitKomp+'?kd='+kd,ctrl)
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

// look up screen for Master Inventory Item
function ShowDialogItemAll(ctrl)
{
	retVal=_sd(urlbitemall, ctrl);
}

// look up screen for Line Item
function ShowDialogLineItem(ctrl)
{
	_sd(urlbLineItem, ctrl);	
}

// look up screen for Pemesanan
function ShowDialogPemesanan(ctrl)
{
	_sd(urlbnopesan, ctrl);	
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

// look up screen for Resep Odc
function ShowDialogResepOdc(ctrl)
{
	_sd(urlbresepodc, ctrl);
}

// look up screen for Retur Resep Rawat Inap
function ShowDialogReturRspRi(ctrl)
{
	_sd(urlbreturrspri, ctrl);
}

// look up screen for Retur Resep One Day Care
function ShowDialogReturRspOdc(ctrl)
{
	_sd(urlbreturrspodc, ctrl);
}

// look up screen for Resep Rawat Inap
function ShowDialogResepRInap(ctrl)
{
	_sd(urlbreseprinap, ctrl);
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

// look up screen for Resep Bebas yang belom posting
function ShowDialogRspBebasUnPost(ctrl)
{
	_sd(urlbresepbebasunpost, ctrl);
}

// look up screen for Bayar Resep Bebas
function ShowDialogBayarBebas(ctrl)
{
	_sd(urlbbayarbebas, ctrl);
}

// look up screen for Bayar Resep Bebas
function ShowDialogBayarResepRJ(ctrl)
{
	_sd(urlbbayarreseprj, ctrl);
}

// look up screen for Retur Obat Bebas
function ShowDialogReturBebas(ctrl)
{
	_sd(urlbreturbebas, ctrl);
}

// look up screen for Penerimaan
function ShowDialogPenerimaanUpdate(ctrl)
{
	_sd(urlbpenerimaanupdate, ctrl);
}

// look up screen for Resep Bebas
function ShowDialogRspBebasRetur(ctrl)
{
	_sd(urlbresepbebasretur, ctrl);
}

// look up screen for Registrasi
function ShowDialogRegistrasiRJ(ctrl)
{
	_sd(urlbregrj, ctrl);
}




//Sub Module Gizi

// look up screen for Item Makanan
function ShowDialogItemMakanan(ctrl)
{
	_sd(urlbItemMakanan, ctrl);
}

// look up screen for Diit
function ShowDialogDiit(ctrl)
{
	_sd(urlbDiit, ctrl);
}

// look up screen Diit for Komplikasi
function ShowDialogDiitforKomp(ctrl,kd)
{
	_sd(urlbDiitforKomp+'?kd='+kd,ctrl)
}

// look up screen for Makanan
function ShowDialogMakanan(ctrl)
{
	_sd(urlbMakanan, ctrl);
}

// look up screen for Golongan
function ShowDialogGolongan(ctrl)
{
	_sd(urlbGolongan, ctrl);
}

// look up screen for Master Menu
function ShowDialogMenu(ctrl)
{
	_sd(urlbmenu, ctrl);
}


// look up screen for Master Menu for Diit
function ShowDialogMenuforDiit(ctrl)
{
	_sd(urlbmenufordiit, ctrl);
}


// look up screen for No.Bukti Diit
function ShowDialogNobukti(sid,ctrl)
{
	_sd(urlbnobukti+'?nr='+sid,ctrl)
}

// look up screen for Registrasi RI
function ShowDialogRegistrasiRI(ctrl)
{
	_sd(urlbregri, ctrl);
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
$(document).ready(function() {
    $("#tombolTambah").click(function() {
        var nama = $("#nama").value;
        var namaP = document.getElementById("namaP").value;
        var jeniskelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
        var tempatLahir = document.getElementById("tempatLahir").value;
        var tglLahir = document.getElementById("tglLahir").value;
        var namaAyah = document.getElementById("namaAyah").value;
        var pekerjaanAyah = document.getElementById("pekerjaanAyah").value;
        var namaIbu = document.getElementById("namaIbu").value;
        var pekerjaanIbu = document.getElementById("pekerjaanIbu").value;
        var telepon = document.getElementById("telepon").value;
    
        if (!nama || !namaP || !jeniskelamin || !tempatLahir || !tglLahir || !namaAyah || !pekerjaanAyah || !namaIbu || !pekerjaanIbu || !telepon || !jalan || !kecamatan || !kota || !provinsi) {
            alert("Harap isi semua kolom!");
            return;
        }

    var genderValue = jeniskelamin.value;

    var tabel = document.getElementById("tabelBody");
    var barisBaru = tabel.insertRow();

    var selNama = barisBaru.insertCell(0);
    var selNamaP = barisBaru.insertCell(1);
    var selJenisKelamin = barisBaru.insertCell(2);
    var selTempatLahir = barisBaru.insertCell(3);
    var selTglLahir = barisBaru.insertCell(4);
    var selNamaAyah = barisBaru.insertCell(5);
    var selPekerjaanAyah = barisBaru.insertCell(6);
    var selNamaIbu = barisBaru.insertCell(7);
    var selPekerjaanIbu = barisBaru.insertCell(8);
    var selTelepon = barisBaru.insertCell(9);
    var selKelola = barisBaru.insertCell(10);

    selNama.innerHTML = nama;
    selNamaP.innerHTML = namaP;
    selJenisKelamin.innerHTML = genderValue;
    selTempatLahir.innerHTML = tempatLahir;
    selTglLahir.innerHTML = tglLahir;
    selNamaAyah.innerHTML = namaAyah;
    selPekerjaanAyah.innerHTML = pekerjaanAyah;
    selNamaIbu.innerHTML = namaIbu;
    selPekerjaanIbu.innerHTML = pekerjaanIbu;
    selTelepon.innerHTML = telepon;
    selKelola.innerHTML = "<button onclick='hapusBaris(this)'>Hapus</button>";

    document.getElementById("nama").value = "";
    document.getElementById("namaP").value = "";
    var radioChecked = document.querySelector('input[name="jenis_kelamin"]:checked');
    if (radioChecked) {
        radioChecked.checked = false;
    }
    $("#tempatLahir").value = "";
    document.getElementById("tglLahir").value = "";
    document.getElementById("namaAyah").value = "";
    document.getElementById("pekerjaanAyah").value = "";
    document.getElementById("namaIbu").value = "";
    document.getElementById("pekerjaanIbu").value = "";
    document.getElementById("telepon").value = "";
}

function hapusBaris(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

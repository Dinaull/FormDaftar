$(document).ready(function() {
    $("#tombolTambah").click(function() {
        var nama = $("#nama").val;
        var namaP = $("namaP").val;
        var jeniskelamin = $('input[name="jenis_kelamin"]:checked').val();
        var tempatLahir = $("tempatLahir").val;
        var tglLahir = $("tglLahir").val;
        var namaAyah = $("namaAyah").val;
        var pekerjaanAyah = $("pekerjaanAyah").val;
        var namaIbu = $("namaIbu").val;
        var pekerjaanIbu = $("pekerjaanIbu").val;
        var telepon = $("telepon").val;
    
        if (!nama || !namaP || !jeniskelamin || !tempatLahir || !tglLahir || !namaAyah || !pekerjaanAyah || !namaIbu || !pekerjaanIbu || !telepon || !jalan || !kecamatan || !kota || !provinsi) {
            alert("Harap isi semua kolom!");
            return;
        }

        var barisBaru = `
        <tr>
            <td>${nama}</td>
            <td>${namaP}</td>
            <td>${jeniskelamin}</td>
            <td>${tempatLahir}</td>
            <td>${tglLahir}</td>
            <td>${namaAyah}</td>
            <td>${pekerjaanAyah}</td>
            <td>${namaIbu}</td>
            <td>${pekerjaanIbu}</td>
            <td>${telepon}</td>
            <td><button class="hapus">Hapus</button></td>
        </tr>
    `;

            $("#tabelBody").append(barisBaru);

            $("#nama, #namaP, #tempatLahir, #tglLahir, #namaAyah, #pekerjaanAyah, #namaIbu, #pekerjaanIbu, #telepon").val("");
            $('input[name="jenis_kelamin"]').prop("checked", false);
        });

        $("#tabelBody").on("click", ".hapus", function () {
            $(this).closest("tr").remove();
        });
    });

//     var genderValue = jeniskelamin.value;

//     var tabel = document.getElementById("tabelBody");
//     var barisBaru = tabel.insertRow();

//     var selNama = barisBaru.insertCell(0);
//     var selNamaP = barisBaru.insertCell(1);
//     var selJenisKelamin = barisBaru.insertCell(2);
//     var selTempatLahir = barisBaru.insertCell(3);
//     var selTglLahir = barisBaru.insertCell(4);
//     var selNamaAyah = barisBaru.insertCell(5);
//     var selPekerjaanAyah = barisBaru.insertCell(6);
//     var selNamaIbu = barisBaru.insertCell(7);
//     var selPekerjaanIbu = barisBaru.insertCell(8);
//     var selTelepon = barisBaru.insertCell(9);
//     var selKelola = barisBaru.insertCell(10);

//     selNama.innerHTML = nama;
//     selNamaP.innerHTML = namaP;
//     selJenisKelamin.innerHTML = genderValue;
//     selTempatLahir.innerHTML = tempatLahir;
//     selTglLahir.innerHTML = tglLahir;
//     selNamaAyah.innerHTML = namaAyah;
//     selPekerjaanAyah.innerHTML = pekerjaanAyah;
//     selNamaIbu.innerHTML = namaIbu;
//     selPekerjaanIbu.innerHTML = pekerjaanIbu;
//     selTelepon.innerHTML = telepon;
//     selKelola.innerHTML = "<button onclick='hapusBaris(this)'>Hapus</button>";

//     document.getElementById("nama").value = "";
//     document.getElementById("namaP").value = "";
//     var radioChecked = document.querySelector('input[name="jenis_kelamin"]:checked');
//     if (radioChecked) {
//         radioChecked.checked = false;
//     }
//     $("#tempatLahir").value = "";
//     document.getElementById("tglLahir").value = "";
//     document.getElementById("namaAyah").value = "";
//     document.getElementById("pekerjaanAyah").value = "";
//     document.getElementById("namaIbu").value = "";
//     document.getElementById("pekerjaanIbu").value = "";
//     document.getElementById("telepon").value = "";
// }

// function hapusBaris(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

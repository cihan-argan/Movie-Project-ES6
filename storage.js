class Storage {
	//12.adım Storage a film ekleyen fonksiyonu Storage Constructorın prototype kısmında oluşturucaz.
	static addFilmToStorage(newFilm) {
		//varsa sotarege içindeki filmleri  bu diziye attıyoruz.
		let films = this.getFilmsFromStorage();
		//array içine yeni film objesini attıyoruz
		films.push(newFilm);
		//yeni eleman eklenmiş diziyi tekrardan storage içine kaydetmeliyiz.
		localStorage.setItem('films', JSON.stringify(films));
	}

	//burada local storage içinde olan filmleri getiren fonksiyonu yazdık.12.adım ve sonraki adımlarda kullanmak için hazırladık.
	static getFilmsFromStorage() {
		//Not: Local Storage içinde bizim bir arrayimiz olabilir yani içinde bir yada iki  film bulunan bu yüzden ilk başta onu almalıyız.
		let films;
		if (localStorage.getItem('films') === null) {
			//films keyine karşılık gelen herhangi bir eleman yoksa bizim burda boş bir array oluşturmamız lazım yani ilk ekleme gerçekleşecek.
			films = [];
		} else {
			//eğer varsa olan değeri almamız gerekiyor fakat ls içinde string değer barınır bunu parse edip orjinal array haline getirmemiz gerekiyor
			films = JSON.parse(localStorage.getItem('films'));
		}
		return films;
	}

	//16.adım fonksiyona gelen film ismini storage içindeki arrayden silme işlemi
	static deleteFilmFromStorage(filmTitle) {
		let films = this.getFilmsFromStorage();

		films.forEach(function(film, index) {
			if (film.title === filmTitle) {
				films.splice(index, 1);
			}
		});

		localStorage.setItem('films', JSON.stringify(films));
	}

	//18-adımın ikinci kısmında ise storage üzerinden bütün filmleri sileceğimiz fonksiyonu oluşturucaz

	static clearAllFilmsFromStorage() {
		//films keyine sahip bütün elemanları kaldır dedik.
		localStorage.removeItem('films');
	}
}

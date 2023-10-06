function clas() {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...clasess) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.clasess = clasess;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 1000;
            this.changeToUzs();
        }

        changeToUzs() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');

            if (this.clasess.length == 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
            }

            this.clasess.forEach((classname) =>
                element.classList.add(classname)
            );

            element.innerHTML = `
    
            <img src=${this.src} alt=${this.alt}/>
            <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
        ${this.descr}
      </div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Price:</div>
        <div class="menu__item-total"><span>${this.price}</span> month</div>
      </div>
    
        `;

            this.parent.append(element);
        }
    }

    axios.get('http://localhost:3000/menu').then((data) => {
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                '.menu .container'
            ).render();
        });
    });

    // async function getRecourse(url) {
    //     const res = await fetch(url);

    //     return await res.json();
    // }

    // getRecourse('http://localhost:3000/menu').then((data) => {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         new MenuCard(
    //             img,
    //             altimg,
    //             title,
    //             descr,
    //             price,
    //             '.menu .container'
    //         ).render();
    //     });
    // });

    // new MenuCard(
    //     'img/tabs/1.png',
    //     'usual',
    //     'Plan "Usual"',
    //     ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem  praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis  harum voluptatum in.',
    //     10,
    //     '.menu .container'
    // ).render();

    // new MenuCard(
    //     'img/tabs/2.jpg',
    //     'plan',
    //     'Plan "Permium"',
    //     ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem  praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis  harum voluptatum in.',
    //     20,
    //     '.menu .container',
    //     'menu__item'
    // ).render();

    // new MenuCard(
    //     'img/tabs/3.jpg',
    //     'vip',
    //     'Plan Vip',
    //     ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem  praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis  harum voluptatum in.',
    //     30,
    //     '.menu .container',
    //     'menu__item'
    // ).render();
}

export default clas;

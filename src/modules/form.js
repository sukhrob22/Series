import { closeModal, openModal } from './modal';
import { postData } from '../server/server';

function form(formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        bindPostData(form);
    });

    const msg = {
        loading: 'Loading...',
        success: 'Thanks for submitting our form',
        failure: 'Somethin went wrong',
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.textContent = msg.loading;
            form.append(statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            // request.setRequestHeader('Content-Type', 'multipart/form-data');

            const formData = new FormData(form);

            // const obj = {};
            // formData.forEach((val, key) => {
            //     obj[key] = val;                       this is't good practis
            // });

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // const json = JSON.stringify(obj);
            // request.send(json);

            // fetch(' http://localhost:3000/request', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(obj),
            // })
            //     .then((data) => data.text())

            postData(' http://localhost:3000/request', json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(msg.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(msg.failure);
                })
                .finally(() => {
                    form.reset();
                });

            // request.addEventListener('load', () => {
            //     if (request.status == 200) {
            //         console.log(request.response);
            //         showThanksModal(msg.success);
            //         form.reset();
            //         setTimeout(() => {
            //             statusMessage.remove();
            //         }, 2000);
            //     } else {
            //         showThanksModal(msg.failure);
            //     }
            // });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        console.log(prevModalDialog);

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
  <div class="modal__content">
     <div data-close class="modal__close">&times;</div>
    <div class="modal__title">${message}<div/>
  <div/>
  `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default form;

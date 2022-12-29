function toast({
            title = '',
            message = '', 
            type = 'info', 
            duration = 3000
            }) {
               const main = document.getElementById('toast');
               if(main) {
                    const toast = document.createElement('div');

                    // Auto remove toast
                    const autoRemoveId = setTimeout(function() {
                        main.removeChild(toast);
                    }, duration + 1000);


                    // Remove toast when clicked
                    toast.onclick = function(e) {
                        if (e.target.closest('.toast__close')) {
                            main.removeChild(toast);
                            // clearTimeout(autoRemoveId)
                        }
                    }

                    const icons = {
                        success: 'fa-solid fa-circle-check',
                        info: 'fa-solid fa-circle-info',
                        warning: 'fa-sharp fa-solid fa-triangle-exclamation',
                        error: 'fa-sharp fa-solid fa-triangle-exclamation'
                    };
                    const icon = icons[type];
                    const delay = (duration / 1000).toFixed(2);

                    toast.classList.add('toast',`toast--${type}`);
                    toast.style.animation = `slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`
                    toast.innerHTML = `
                        <div class="toast__icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}</p>
                        </div>
                        <div class="toast__close">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
                    main.appendChild(toast);

               } 
        }

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Bạn đã đang kí tài khoản thành công!',
        type: 'success',
        duration: 5000
    });
}

function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Có lỗi xảy ra, Vui lòng thử lại!',
        type: 'error',
        duration: 5000
    });
}
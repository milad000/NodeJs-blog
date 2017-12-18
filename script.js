        $('.addToList').on('submit', function (event) {
                    event.preventDefault();
                    //            var productId = $(this).find('.productId');
                    var productId = $(this).find(".productId");;
                    console.log(productId.val());
        });
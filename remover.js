function DoRequest(id) {
    return fetch ()
}

function CreateFetchRequest(id) {
    while (true) {
        req = DoRequest(id)
        if (req.status == "429" || req.status == 429) {
            req = DoRequest(id)
            continue;

        } else if (req.status == "undefined") {
            break

        } else {
            break
        }
    }


    return req.status
}

window.id = [];
YOUR_NAME = "";
window.idx = 0;
setInterval(function() {
    jQuery('#page-content-wrapper').find('div[id^=m]').each(function() {
        $('virtual-repeat').scrollTop(0);
        setTimeout(function(_this) {
            if ($(_this).text().indexOf(YOUR_NAME) != -1) {

                _id = $(_this).attr('id');
                if (window.id.indexOf(_id) == -1) {
                    window.id.push(_id.substr(1));
                    if (_id != "messageBody" && _id != "not inside") {
                        CreateFetchRequest(_id.substr(1))
                    }

                } else {}
            } else {}
        }, 1000, this);
    });

}, 2000);

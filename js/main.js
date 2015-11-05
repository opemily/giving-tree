
var $log = $('#log'),
    $prompt = $('#prompt'),
    givingTree = {
        appleCount: 1000
    };

$(function () {

    var appleCounter = function () {

        $log.append('<li class="action"> The Giving Tree has ' + givingTree.appleCount + ' apples on her branches</li>');
    };

    var appleGiver = function () {

        $log.append('<li class="action"> The Giving Tree ' + promptWords[0] + 's ' + promptWords[1] + ' ' + promptWords[2] + ' ' + promptWords[3] + '</li>');

        givingTree.appleCount -= parseInt(promptWords[2]);
    };

    var recipient = function () {

        givingTree.recipient = [promptWords[1], promptWords[2]];
    };


    $prompt.keypress(function (event) {
        if (event.which === 13) {

            promptCommand = $prompt.val();
            $log.append('<li class="command">' + promptCommand + '</li>');
            $prompt.val('');

          // Act 1

            if (promptCommand === 'apples') {

                appleCounter();
            }

          // Act 2

            promptWords = promptCommand.split(' ');

            if (promptWords[0] === 'give') {

                appleGiver();
                recipient();
            }

          // Act 3

            if (promptWords[0] === 'ledger') {

            }
        }
    });
});
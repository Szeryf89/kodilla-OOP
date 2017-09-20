$(function () {
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        var i = 0;
        for (i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    function Column(name) {
        var self = this;
        this.id = randomString();
        this.name = name;
        this.$element = createColumn();

        function createColumn() {
            var $column = $('<div>').addClass('column');
            var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
            var $columnCardList = $('<ul>').addClass('column-card-list');
            var $columnDelete = $('<button>').addClass('btn-delete btn btn-danger').text('delate');
            var $columnAddCard = $('<button>').addClass('add-card btn btn-success').text('add card');
            $columnDelete.click(function () {
                self.removeColumn();
            });
            $columnAddCard.click(function () {
                self.addCard(new Card(prompt("enter card name")));
            });
            $column.append($columnTitle)
                    .append($columnDelete)
                    .append($columnAddCard)
                    .append($columnCardList);
            return $column;
        }
    }

    Column.prototype = {
        addCard: function (card) {
            this.$element.children('ul').append(card.$element);
        },
        removeColumn: function () {
            this.$element.remove();
        }
    };

    function Card(description) {
        var self = this;

        this.id = randomString();
        this.description = description;
        this.$element = createCard();

        function createCard() {
            var $card = $('<li>').addClass('card');
            var $cardDescription = $('<p>').addClass('card-description').text(self.description);
            var $cardDelete = $('<button>').addClass('btn-delete btn btn-warning').text('x');

            $cardDelete.click(function(){
                self.removeCard();
            });

            $card.append($cardDelete)
                .append($cardDescription);

            return $card;
        }
        Card.prototype = {
            removeCard: function() {
                this.$element.remove();
            }
        }
    }
    var board = {
        name: 'Kanban board',
        addColumn: function(column) {
            this.$element.append(column.$element);
            initSortable();
        },
        $element: $('#board .column-container')
    };
    function initSortable() {
        $('.column-card-list').sortable({
            connectWith: '.column-card-list',
            placeholder: 'card-placeholder'
        }).disableSelection();
    }
    $('.create-column')
        .click(function(){
            var name = prompt('enter column name');
            var column = new Column(name);
            board.addColumn(column);
        });
    var todoColumn = new Column('to do column');
    var doingColumn = new Column('doing column');
    var doneColumn = new Column('done column');

    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

    var card1 = new Card('new task');
    var card2 = new Card('create kanban board');

    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
});
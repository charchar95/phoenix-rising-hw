class Player
    attr_accessor :name
    def initialize name
        @name = ""
        bankroll = 100
        hand = []
    end
end

class Computer
    attr_accessor :name
    def initialize name
        @name = ""
        bankroll = 10000
        hand = []
    end
end


class Card
attr_accessor :value
    def initialize value
        @value = value
    end

end

@deck = []


cards_in_suit = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
4.times do
  cards_in_suit.each do |card_value|
    @deck << Card.new(card_value)
  end
end

# p deck.length


def deal_deck_play_blackjack
    @deck.shuffle!
    @player.hand << @deck.first
    @player.hand << @deck.second
    @computer.hand << @deck.third
    @computer.hand << @deck.fourth
    @deck.delete_at(1,2,3,4)
    check_win_pay_winner
    game_loop
end

def check_win_pay_winner 
    p "The minimum bet is $10. Select (a) to bet the minimum or (u) to up the bet"
    player_input = gets.chomp
    if player_input === "a"
        bet = 10
    elsif player_input === "u"
        p "How much do you want to bet on this hand?"
            bet = gets.chomp.to_i
        end
    p "Player has: #{player.hand} and Computer has: #{computer.hand}"
    player_score = player.hand[0].value + player.hand[1].value
    computer_score = computer.hand[0].value + computer.hand[1].value
    if player_score > 21
        p "Computer Wins!"
        computer.bankroll += bet
        player.bankroll -= bet
        elsif computer_score > 21
            p "Player Wins!"
            player.bankroll += bet
            computer.bankroll -= bet
        elsif player_score === computer_score
            p "Its a tie! Try again!"
        elsif player_score > computer_score
            p "Player Wins!"
            player.bankroll += bet
            computer.bankroll -= bet
        elsif computer_score > player_score
            p "Computer Wins!"
            computer.bankroll += bet
            player.bankroll -= bet
        elsif computer_score == 21
            p "Computer Wins!"
            computer.bankroll += bet
            player.bankroll -= bet
        elsif player_score == 21
            p "Computer Wins!"
            computer.bankroll += bet
            player.bankroll -= bet
end


round_counter = 0
def game_logic 
    if @deck.length > 0 && round_counter == 0
        @computer_player = Computer.new 
        @player = Player.new 
        p "Let's play Black Jack!"
        p "What is your name?"
        player.name = gets.chomp
        p "Welcome #{player_name}! Let's get started."
    elsif @deck.length > 0 
        p "Select (d) to deal, (b) to see your bank ammount or (q) to quit"
        player_input = gets.chomp
        if player_input === "d"
            deal_deck_play_blackjack
        elsif player_input === "q"
            p "Thanks for playing! See you next time :)"
        elsif player_input === "b"
            p "Your bankroll is #{player.bankroll}"
            game_logic
        end
    elsif 
        if @deck.length === 0
            p "There are no more cards. Thanks for playing!"
        elsif @player.bankroll === 0 
            p "You have no more money in your bank. Better luck next time!"
        end
    end
end


game_logic
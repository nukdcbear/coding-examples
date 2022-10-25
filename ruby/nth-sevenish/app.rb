#! /usr/bin/env ruby

class App
  def run(nth:)
    result = 0
    shift_amt = 0

    while nth > 0
      if nth & 1 == 1
        result += 7 ** shift_amt
      end

      shift_amt += 1
      nth >>= 1
    end

    puts result
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.run nth: ARGV.first.to_i
end
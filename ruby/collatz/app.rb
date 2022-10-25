#! /usr/bin/env ruby

class App
  def collatz(number:)
    n = number
    steps = 0

    while n != 1
      if n.even?
        n /= 2
      else
        n = 3 * n + 1
      end
      steps += 1
    end

    puts "Collatz #{number} has #{steps} steps"
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.collatz number: ARGV.first.to_i
end
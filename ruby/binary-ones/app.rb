#! /usr/bin/env ruby

class App

  def run(number:)
    strNumber = number.to_i.to_s(2).rjust(16, '0')
    arrNumber = strNumber.split('')

    consecutiveOnes = arrNumber.chunk { |n| n == '1' }.map { |k, v| k ? v.size : 0 }.max

    puts "Binary #{number} - #{strNumber} has #{consecutiveOnes} consecutive ones"
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.run number: ARGV.first
end
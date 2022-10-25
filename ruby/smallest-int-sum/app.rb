#! /usr/bin/env ruby

class App
  def findsmallest(ints:)
    intArray = ints.split(', ').map(&:to_i)
    intArray.sort!

    maxPossible = 0

    if intArray.size == 0 || intArray[0] != 1
      puts maxPossible + 1
      return
    end

    maxPossible = 1

    intArray.each do |int|
      if int <= maxPossible
        maxPossible += int
      else
        break
      end
    end

    puts maxPossible
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.findsmallest ints: ARGV.first
end
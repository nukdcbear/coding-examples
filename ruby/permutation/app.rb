#! /usr/bin/env ruby

class App
  def permutation(init:, p:)

    if init.size != p.size
      puts 'Mismatched permutation and array sizes'
      return
    end

    newArray = []
    p.each do |i|
      newArray.push(init[i])
    end

    puts newArray.join(' ')
  end
end

if $PROGRAM_NAME == __FILE__
  app = App.new
  app.permutation init: ARGV.first.split(', '), p: ARGV.last.split(', ').map(&:to_i)
end
#! /usr/bin/env ruby

class LastPersonStanding

  def run(totalPeople:, kthPerson:)
    people = (1..totalPeople).to_a
    index = 0

    while people.size > 1
      index = (index + kthPerson - 1) % people.size
      people.delete_at(index)
    end

    puts "Last person standing: #{people.first}"
  end
end

if $PROGRAM_NAME == __FILE__
  app = LastPersonStanding.new
  app.run totalPeople: ARGV.first.to_i, kthPerson: ARGV[1].to_i
end
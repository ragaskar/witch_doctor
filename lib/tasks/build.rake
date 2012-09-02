desc "Build witch doctor from src"
task :build do
  `rake assets:precompile`
  `cp ./public/assets/witch_doctor.js ./witch_doctor-min.js`
  `rm -rf public/assets`
  `rake assets:precompile RAILS_ENV=development RAILS_GROUPS=assets`
  `cp ./public/assets/witch_doctor.js ./witch_doctor.js`
  `rm -rf public/assets`
end

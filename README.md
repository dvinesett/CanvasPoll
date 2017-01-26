## Canvas LTI Poll Application


This is an implementation of an Learning Tools Interoperability (LTI) tool provider.  This tool provider will provide the Instructor of the Canvas course the ability to make Polls and mark the correct answer for each.

The Instructor will also be able to host a specific poll.  Once hosted Students will have access to the Poll.  They will only see the answers to the poll and not the question itself.  This is done to limit the ability to participate in the Poll while not in class.

Written in Ruby using the Sinatra web framework. You'll need to have ruby installed, with rubygems.

### Running the Tool

To run this tool, download the git repository, then open a console
prompt in the repo directory.

You can run the tool by downloading this repository.  Once downloaded, open a console in the directory where the repository is located.

First, install bundler

    $ gem install bundler

Next install the necessary gems:

    $ bundle install

Now, start the project:

    $ ruby -rubygems app.rb


### Configuring Canvas

You need to point a course to the project.

Here is what your configuration should look like:

![tool config](https://lh6.googleusercontent.com/SojWt5reKigl_2nbPJ1NExp_Nb4V8Z6Cz_omUfa7_CcbCxWhEew7ji6CKXhBPYXywGQKBT6l=w1920-h920-rw)

###

This will give make the application into a Navigation Link.  The link should appear near the bottom of the homepage on Canvas.  If the link is not present, refresh your page.

###

![assignment config](https://lh6.googleusercontent.com/MX-HwBkNlyFH_qL9YkYNWGINrQ0GhlCpAH62TtLEViJSuhRV1Em_UCk93sAHraNAmY3IJHFq=w1920-h920-rw)

###

Now the tool will be available through the link for both the Instructor and a Student.  The Instructor will see the Instructor view and Students will only see Polls hosted by the Professor.
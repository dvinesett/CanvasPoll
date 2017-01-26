class PollsController < ApplicationController
  before_action :set_poll, only: [:show, :show_student, :edit, :update, :destroy]

  # GET /polls
  # GET /polls.json
  def index
    # TODO only show current course
    @polls = Poll.where(course_id: 1)
  end

  # GET /polls/student
  def index_student
    # TODO only show current course
    @polls = Poll.where(course_id: 1, is_open: true)
  end
  
  # GET /polls/1
  # GET /polls/1.json
  def show
  end
  
  # get /polls/1/student
  def show_student
  end

  # GET /polls/new
  def new
    @poll = Poll.new
  end

  # GET /polls/1/edit
  def edit
  end

  # POST /polls
  # POST /polls.json
  def create
    # TODO: change to Poll.new and verify poll.save
    @poll = Poll.create(name: params["quiz_title"],
                  course_id: 1,
                  is_open: true)
    questions = params.keys.select{ |i| i =~ /^q\d$/ }
    all_answers = params.keys.select{ |i| i =~ /^q\da\d$/ }
    
    answer_keys = params.keys.select{ |i| i =~ /^q\dr$/ }
    correct_answers = answer_keys.map{ |i| params[i] }
    
    questions.each { |q|
    question = @poll.questions.create(text: params[q])
    
    answers = all_answers.select{ |i| i =~ /^#{q}/ }
      answers.each{ |a|
        question.answers.create(
            text: params[a],
            weight: is_answer_correct?(correct_answers, a) ? 1 : 0,
            votes: 0)
      }
    }

    # respond_to do |format|
    #   if @poll.save
    #     format.html { redirect_to @poll, notice: 'Poll was successfully created.' }
    #     format.json { render :show, status: :created, location: @poll }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @poll.errors, status: :unprocessable_entity }
    #   end
    # end
    redirect_to :root
  end

  # PATCH/PUT /polls/1
  # PATCH/PUT /polls/1.json
  def update
    respond_to do |format|
      if @poll.update(poll_params)
        format.html { redirect_to @poll, notice: 'Poll was successfully updated.' }
        format.json { render :show, status: :ok, location: @poll }
      else
        format.html { render :edit }
        format.json { render json: @poll.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /polls/1
  # DELETE /polls/1.json
  def destroy
    @poll.destroy
    respond_to do |format|
      format.html { redirect_to polls_url, notice: 'Poll was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_poll
      @poll = Poll.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def poll_params
      params.fetch(:poll, {})
    end

    def is_answer_correct?(correct_answers, answer)
      correct_answers.any? { |s| 
        s.include? answer.match(/^q\da(\d)$/).captures[0]
      }
    end
end

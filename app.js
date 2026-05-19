// Calculus Learning Platform - Application Logic

class CalculusApp {
    constructor(contentData) {
        this.content = contentData;
        this.currentModule = null;
        this.currentLesson = null;
        this.currentQuiz = null;
        this.quizAnswers = {};
        this.progress = this.loadProgress();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderModules();
        this.updateProgress();
    }

    // LocalStorage Management
    loadProgress() {
        const saved = localStorage.getItem('calculusProgress');
        return saved ? JSON.parse(saved) : {
            completedLessons: [],
            quizScores: {},
            currentView: 'home'
        };
    }

    saveProgress() {
        localStorage.setItem('calculusProgress', JSON.stringify(this.progress));
        this.updateProgress();
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress?')) {
            this.progress = {
                completedLessons: [],
                quizScores: {},
                currentView: 'home'
            };
            localStorage.removeItem('calculusProgress');
            this.showView('home');
            this.updateProgress();
        }
    }

    // Event Listeners
    setupEventListeners() {
        document.getElementById('reset-btn').addEventListener('click', () => this.resetProgress());
        document.getElementById('back-btn').addEventListener('click', () => this.showView('home'));
        document.getElementById('back-from-lesson-btn').addEventListener('click', () => this.showModule(this.currentModule.id));
        document.getElementById('back-from-quiz-btn').addEventListener('click', () => this.showModule(this.currentModule.id));
        document.getElementById('back-from-results-btn').addEventListener('click', () => this.showModule(this.currentModule.id));

        document.getElementById('prev-lesson-btn').addEventListener('click', () => this.previousLesson());
        document.getElementById('next-lesson-btn').addEventListener('click', () => this.nextLesson());
    }

    // View Management
    showView(viewName) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`${viewName}-view`).classList.add('active');
        this.progress.currentView = viewName;
    }

    // Module Rendering
    renderModules() {
        const modulesList = document.getElementById('modules-list');
        const moduleCards = document.getElementById('module-cards');

        modulesList.innerHTML = '';
        moduleCards.innerHTML = '';

        this.content.modules.forEach(module => {
            // Sidebar button
            const btn = document.createElement('button');
            btn.className = 'module-btn';
            btn.textContent = `${module.id}. ${module.title}`;
            btn.addEventListener('click', () => this.showModule(module.id));
            modulesList.appendChild(btn);

            // Home page card
            const card = document.createElement('div');
            card.className = 'module-card';
            card.innerHTML = `
                <h3>Module ${module.id}: ${module.title}</h3>
                <p>${module.description}</p>
                <div class="module-card-meta">
                    <span>${module.lessons.length} lessons</span>
                    <span>Quiz: ${module.quiz.questions.length} questions</span>
                </div>
            `;
            card.addEventListener('click', () => this.showModule(module.id));
            moduleCards.appendChild(card);
        });
    }

    // Module View
    showModule(moduleId) {
        const module = this.content.modules.find(m => m.id === moduleId);
        if (!module) return;

        this.currentModule = module;
        document.getElementById('module-title').textContent = `${module.id}. ${module.title}`;
        document.getElementById('module-info').textContent = `${module.lessons.length} lessons`;

        const container = document.getElementById('lessons-container');
        container.innerHTML = '';

        module.lessons.forEach((lesson, index) => {
            const card = document.createElement('div');
            card.className = 'lesson-card';

            const isCompleted = this.progress.completedLessons.includes(
                `${moduleId}-${lesson.id}`
            );

            if (isCompleted) card.classList.add('completed');

            card.innerHTML = `
                <div class="lesson-card-number">${String(index + 1).padStart(2, '0')}</div>
                <h3>${lesson.title}</h3>
                <div class="action-buttons">
                    <button class="btn btn-primary btn-small">Read Lesson</button>
                </div>
            `;

            card.querySelector('.btn-primary').addEventListener('click', () => {
                this.showLesson(moduleId, lesson.id);
                card.classList.add('completed');
                const progressId = `${moduleId}-${lesson.id}`;
                if (!this.progress.completedLessons.includes(progressId)) {
                    this.progress.completedLessons.push(progressId);
                    this.saveProgress();
                }
            });

            container.appendChild(card);
        });

        // Quiz button at bottom
        const quizSection = document.createElement('div');
        quizSection.style.cssText = 'margin-top: 2rem; padding: 2rem; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white; border-radius: 0.75rem; text-align: center;';
        quizSection.innerHTML = `
            <h3 style="margin-bottom: 1rem;">Ready to Test Your Knowledge?</h3>
            <p style="margin-bottom: 1.5rem;">Complete the 10-question quiz for Module ${module.id}</p>
            <button class="btn" style="background-color: white; color: var(--primary-color); font-weight: 600;">Start Quiz</button>
        `;

        quizSection.querySelector('.btn').addEventListener('click', () => this.startQuiz(moduleId));
        container.appendChild(quizSection);

        this.showView('module');
    }

    // Lesson View
    showLesson(moduleId, lessonId) {
        const module = this.content.modules.find(m => m.id === moduleId);
        const lesson = module.lessons.find(l => l.id === lessonId);

        if (!lesson) return;

        this.currentLesson = { moduleId, lessonId, lesson };

        document.getElementById('lesson-title').textContent = lesson.title;

        const lessonBody = document.getElementById('lesson-body');
        lessonBody.innerHTML = `
            <div class="concept-box">
                <h3>${lesson.concept}</h3>
            </div>

            <div class="simple-explanation">
                <h4>📚 Simple Explanation</h4>
                <p>${lesson.explanation}</p>
            </div>

            <div class="real-world-example">
                <h4>🌍 Real-World Example</h4>
                <p>${lesson.realWorldExample}</p>
            </div>

            <div class="key-points">
                <h4>🔑 Key Points</h4>
                <ul>
                    ${lesson.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        `;

        // Update navigation buttons
        const prevBtn = document.getElementById('prev-lesson-btn');
        const nextBtn = document.getElementById('next-lesson-btn');

        const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);
        prevBtn.disabled = lessonIndex === 0;
        nextBtn.disabled = lessonIndex === module.lessons.length - 1;

        this.showView('lesson');
    }

    previousLesson() {
        const { moduleId, lesson } = this.currentLesson;
        const module = this.content.modules.find(m => m.id === moduleId);
        const index = module.lessons.findIndex(l => l.id === lesson.id);

        if (index > 0) {
            this.showLesson(moduleId, module.lessons[index - 1].id);
        }
    }

    nextLesson() {
        const { moduleId, lesson } = this.currentLesson;
        const module = this.content.modules.find(m => m.id === moduleId);
        const index = module.lessons.findIndex(l => l.id === lesson.id);

        if (index < module.lessons.length - 1) {
            this.showLesson(moduleId, module.lessons[index + 1].id);
        }
    }

    // Quiz
    startQuiz(moduleId) {
        const module = this.content.modules.find(m => m.id === moduleId);
        this.currentQuiz = { moduleId, quiz: module.quiz };
        this.quizAnswers = {};

        document.getElementById('quiz-title').textContent = `Module ${moduleId} Quiz`;
        const container = document.getElementById('quiz-container');
        container.innerHTML = '';

        module.quiz.questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';

            const questionNumber = `
                <div class="quiz-question-number">Question ${index + 1} of ${module.quiz.questions.length}</div>
                <span class="question-type">${q.type === 'multiple-choice' ? 'Multiple Choice' : q.type === 'true-false' ? 'True/False' : 'Select All'}</span>
            `;

            let optionsHtml = '';
            const inputType = q.type === 'multiple-choice' ? 'radio' : 'checkbox';

            q.options.forEach((opt, optIndex) => {
                const optId = `q${q.id}-opt${optIndex}`;
                optionsHtml += `
                    <label class="option">
                        <input type="${inputType}" name="q${q.id}" value="${optIndex}" id="${optId}">
                        <span>${opt.text}</span>
                    </label>
                `;
            });

            questionDiv.innerHTML = `
                ${questionNumber}
                <h3>${q.text}</h3>
                <div class="options">${optionsHtml}</div>
            `;

            // Add event listeners for option selection
            questionDiv.querySelectorAll('input').forEach(input => {
                input.addEventListener('change', () => {
                    this.quizAnswers[q.id] = Array.from(
                        questionDiv.querySelectorAll(`input[name="q${q.id}"]:checked`)
                    ).map(i => parseInt(i.value));
                });
            });

            container.appendChild(questionDiv);
        });

        // Submit button
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn btn-success';
        submitBtn.textContent = 'Submit Quiz';
        submitBtn.style.cssText = 'width: 100%; margin-top: 2rem; padding: 1rem; font-size: 1.1rem;';
        submitBtn.addEventListener('click', () => this.submitQuiz());

        container.appendChild(submitBtn);
        this.showView('quiz');
    }

    submitQuiz() {
        const module = this.content.modules.find(m => m.id === this.currentQuiz.moduleId);
        let correctCount = 0;
        const results = [];

        module.quiz.questions.forEach(q => {
            const userAnswers = this.quizAnswers[q.id] || [];
            const correctAnswers = q.options
                .map((opt, idx) => opt.correct ? idx : null)
                .filter(idx => idx !== null);

            const isCorrect = JSON.stringify(userAnswers.sort()) ===
                            JSON.stringify(correctAnswers.sort());

            if (isCorrect) correctCount++;

            results.push({
                question: q.text,
                userAnswers: userAnswers.map(idx => q.options[idx].text),
                correctAnswers: correctAnswers.map(idx => q.options[idx].text),
                isCorrect,
                explanation: q.explanation
            });
        });

        const score = (correctCount / module.quiz.questions.length) * 100;
        const quizKey = `module-${this.currentQuiz.moduleId}`;

        this.progress.quizScores[quizKey] = {
            score: Math.round(score),
            timestamp: new Date().toISOString()
        };
        this.saveProgress();

        this.showResults(correctCount, module.quiz.questions.length, results);
    }

    showResults(correctCount, totalCount, results) {
        const score = Math.round((correctCount / totalCount) * 100);
        const feedback = score >= 80 ? 'Excellent!' : score >= 60 ? 'Good job!' : 'Keep practicing!';

        let resultsHtml = `
            <div class="results-score">
                <div class="score-circle">
                    <div class="score-number">${correctCount}/${totalCount}</div>
                    <div class="score-total">${score}%</div>
                </div>
                <div class="results-message">${feedback}</div>
                <div class="results-feedback">
                    You answered ${correctCount} out of ${totalCount} questions correctly.
                </div>
            </div>

            <div class="result-details">
                <div class="result-item">
                    <span class="result-label">Score</span>
                    <span class="result-value">${score}%</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Correct</span>
                    <span class="result-value">${correctCount}/${totalCount}</span>
                </div>
                <div class="result-item">
                    <span class="result-label">Passing Score</span>
                    <span class="result-value">60%</span>
                </div>
            </div>

            <div class="review-answers">
                <h3>Answer Review</h3>
                ${results.map((r, idx) => `
                    <div class="answer-review ${r.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="answer-review-q">Q${idx + 1}: ${r.question}</div>
                        <div class="answer-review-text">
                            <strong>${r.isCorrect ? '✓ Correct' : '✗ Incorrect'}</strong>
                        </div>
                        <div class="answer-review-text">
                            <strong>Your answer:</strong> ${r.userAnswers.join(', ')}
                        </div>
                        <div class="answer-review-text">
                            <strong>Correct answer:</strong> ${r.correctAnswers.join(', ')}
                        </div>
                        <div class="answer-review-text" style="color: var(--primary-color); margin-top: 0.5rem;">
                            <em>${r.explanation}</em>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        document.getElementById('results-content').innerHTML = resultsHtml;
        this.showView('results');
    }

    // Progress
    updateProgress() {
        const totalLessons = this.content.modules.reduce((sum, m) => sum + m.lessons.length, 0);
        const completedLessons = this.progress.completedLessons.length;
        const progressPercent = Math.round((completedLessons / totalLessons) * 100);

        document.getElementById('progress-text').textContent = `${progressPercent}% Complete`;
        document.getElementById('progress-fill').style.width = `${progressPercent}%`;

        // Update sidebar module buttons
        this.content.modules.forEach(module => {
            const btn = Array.from(document.querySelectorAll('.module-btn')).find(b =>
                b.textContent.includes(module.title)
            );
            if (btn) {
                const moduleLessons = module.lessons.filter(l =>
                    this.progress.completedLessons.includes(`${module.id}-${l.id}`)
                );
                if (moduleLessons.length > 0) {
                    btn.style.backgroundColor = 'var(--primary-light)';
                    btn.style.color = 'white';
                }
            }
        });
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    const app = new CalculusApp(calculusContent);

    // Show home view by default
    app.showView('home');
});

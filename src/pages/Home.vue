<template>
  <div>
    <!-- HEADER -->
    <app-header/>
    <!-- MAIN -->
    <main>
      <div class="container">
        <!--sections-->
        <div class="row">
          <div class="col-lg-8">
            <div class="ass1-section__list">
              <div class="ass1-section__item">
                <div class="ass1-section">
                  <div class="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" class="ass1-section__avatar ass1-avatar">
                      <img src="images/avatar-02.png" alt />
                    </a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" class="ass1-section__name">Thanos</a>
                      <span class="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div class="ass1-section__content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!
                    </p>
                    <div class="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html">
                        <img src="images/microphone-1209816_1920.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div class="ass1-section__footer">
                    <a href="#" class="ass1-section__btn-comment ass1-btn-icon">
                      <i class="icon-Comment_Full"></i>
                      <span>982</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="ass1-section__item">
                <div class="ass1-section">
                  <div class="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" class="ass1-section__avatar ass1-avatar">
                      <img src="images/avatar-02.png" alt />
                    </a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" class="ass1-section__name">Thanos</a>
                      <span class="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div class="ass1-section__content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!
                    </p>
                    <div class="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html">
                        <img src="images/blog-rating.png" alt />
                      </a>
                    </div>
                  </div>
                  <div class="ass1-section__footer">
                    <a href="#" class="ass1-section__btn-comment ass1-btn-icon">
                      <i class="icon-Comment_Full"></i>
                      <span>982</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="ass1-section__item">
                <div class="ass1-section">
                  <div class="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" class="ass1-section__avatar ass1-avatar">
                      <img src="images/avatar-02.png" alt />
                    </a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" class="ass1-section__name">Thanos</a>
                      <span class="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div class="ass1-section__content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!
                    </p>
                    <div class="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html">
                        <img src="images/dress_owesom.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div class="ass1-section__footer">
                    <a href="#" class="ass1-section__btn-comment ass1-btn-icon">
                      <i class="icon-Comment_Full"></i>
                      <span>982</span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="ass1-section__item">
                <div class="ass1-section">
                  <div class="ass1-section__head">
                    <a href="bai-viet-chi-tiet.html" class="ass1-section__avatar ass1-avatar">
                      <img src="images/avatar-02.png" alt />
                    </a>
                    <div>
                      <a href="bai-viet-chi-tiet.html" class="ass1-section__name">Thanos</a>
                      <span class="ass1-section__passed">2 giờ trước</span>
                    </div>
                  </div>
                  <div class="ass1-section__content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et inventore obcaecati eum
                      deserunt ut, aperiam quas! Placeat blanditiis consequatur, deserunt facere iusto
                      amet a ad suscipit laudantium unde quidem perferendis!
                    </p>
                    <div class="ass1-section__image">
                      <a href="bai-viet-chi-tiet.html">
                        <img src="images/frog-1530803_960_720.jpg" alt />
                      </a>
                    </div>
                  </div>
                  <div class="ass1-section__footer">
                    <a href="#" class="ass1-section__btn-comment ass1-btn-icon">
                      <i class="icon-Comment_Full"></i>
                      <span>982</span>
                    </a>
                  </div>
                </div>
              </div>
              <button class="load-more ass1-btn">
                <span>Xem thêm</span>
              </button>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="ass1-aside">
              <div class="ass1-content-head__t">
                <div>Bài viết gần đây của bạn.</div>
              </div>
              <div>
                Vui lòng đăng nhập để xem nội dung này
                <a href="#">Đăng nhập</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  name: "home",
  components: {
    AppHeader
  }
};
</script>

<style>
</style>
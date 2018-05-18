<?php include 'includes/header.php'; ?>

<div class="container">
  <div class="row">
    <nav>
        <button type="button" class="btn btn-primary btn-lg eten">Eten</button>
        <button type="button" class="btn btn-primary btn-lg drinken">Drinken</button>
    </nav>
  </div>
</div>



<div class="col-md-12">
  <div class="main">
    <div class="container">
      <div class="row">

  <div class="col-md-3">
    <button type="button" value="voorgerecht" class="btn btn-primary btn-lg voor" style="background: #ff4e4e;">Voor</button>
    <button type="button" class="btn btn-primary btn-lg hoofd" style="background: white; color: black;">Hoofd</button>
    <button type="button" class="btn btn-primary btn-lg na" style="background: #52bc52;">Na</button>
  </div>




<?php
  //create DB object
  $db = new Database();

  //Create Query for Posts
  $query = "SELECT * FROM gerechten";

  $posts = $db->select($query);

  ?>

  <?php if($posts) : ?>

<!-- fetch zorgt ervoor dat result rows as an assiciative way -->
      <?php while($row = $posts->fetch_assoc()) : ?>  


        <div class="col-md-9">
          <div class="menu">
            <ul>
                <li>
                  <?php echo $row['subsoort']; ?>
                </li>
              <div class="row">

              <div class="col-md-10">
              <li>
                <p class="productnaam">
                  <?php echo $row['naam'];?> 
                </p>
              </div>
              <div class="col-md-2">
                <p class="productprijs">
                  <?php echo  number_format($row['prijs'])."<br>"; ?>
                </p>
              </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <?php endwhile; ?>

      <!-- door de loop haalt hij altijd objecten uit de posts tabel. -->

     <?php else : ?>
    <p> There are no posts yet.</p>;

<?php endif ; ?>







<?php include 'includes/footer.php'; ?>


